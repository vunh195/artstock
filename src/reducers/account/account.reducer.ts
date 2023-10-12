import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  getAccessToken,
  getNonceRegistered,
  getSignature,
  registerAndGetNonce,
} from './account.service';
import { ENVS } from 'configs/Configs.env';
import { toast } from 'react-toastify';

export interface IAccountState {
  token: string;
  expiresIn: string;
  address?: string;
}

export interface IReponseWalletStatus {
  registered: boolean;
  nonce: string;
}

export interface IWalletProvider {
  address: string;
  refferal?: string;
  sdk: any;
}

const initialState: IAccountState = { token: '', expiresIn: '' };

export const signInByWallet = createAsyncThunk(
  'account/signinUserByWallet',
  async (wallet: IWalletProvider) => {
    try {
      // const sdk = useSDK();
      if (!wallet.address) {
        throw new Error('Please connect your wallet');
      }
      const walletStatus: IReponseWalletStatus = await getNonceRegistered(
        wallet.address,
      );
      const isRegister = walletStatus.registered;
      let nonce = isRegister ? walletStatus.nonce : undefined;
      if (!isRegister) {
        const resRegister: IReponseWalletStatus = await registerAndGetNonce(
          wallet.address,
          parseInt(ENVS.REACT_APP_BASE_CHAIN_ID[0]),
          wallet.refferal,
        );
        nonce = resRegister.nonce;
      }
      if (!nonce) {
        throw new Error('Hmm! Cannot find your nonce');
      }
      const signature = await getSignature(nonce || '0', wallet?.sdk);

      if (!signature) {
        throw new Error('Hmm! Cannot find your signature');
      }
      const account: IAccountState = await getAccessToken(
        wallet.address,
        signature,
      );
      return { ...account, address: wallet.address };
    } catch (err: any) {
      toast.error(err?.message || err);
    }
  },
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateAccount(state: IAccountState, action: PayloadAction<IAccountState>) {
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
      state.address = action.payload.address;
    },
    deleteAccount(state: IAccountState) {
      (state.token = ''), (state.expiresIn = ''), (state.address = undefined);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signInByWallet.fulfilled,
      (state: IAccountState, action: any) => {
        // Add user to the state array
        state.token = action?.payload?.token;
        state.expiresIn = action?.payload?.expiresIn;
        state.address = action?.payload?.address;
      },
    );
  },
});

export const { updateAccount, deleteAccount } = accountSlice.actions;

export const AccountReducer = accountSlice.reducer;
