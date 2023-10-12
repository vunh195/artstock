import React, { FunctionComponent, useCallback } from 'react';

import { onMoveAnimation } from 'services/hooks/useDevelopUI';
import { useAppDispatch } from 'app/store';
import { selectToken, signInByWallet } from 'reducers';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useBalance, useMetamask, useSDK } from '@thirdweb-dev/react';
import { useWalletConnect } from '@thirdweb-dev/react';
import { useDisconnect } from '@thirdweb-dev/react';
import { useNetwork } from '@thirdweb-dev/react';
import { useAddress } from '@thirdweb-dev/react';
import { useChainId } from '@thirdweb-dev/react';
import { useNetworkMismatch } from '@thirdweb-dev/react';
import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk';
export const withConnect =
  (WrappedComponent: FunctionComponent) => (props: any) => {
    const { data: nativeBalance } = useBalance(NATIVE_TOKEN_ADDRESS);
    function useGetSelectQuery() {
      const { search } = useLocation();

      return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const account = useAddress();
    const sdk = useSDK();
    const onSigninWallet = useCallback(
      () => dispatch(signInByWallet({ address: account || '', sdk })),
      [account, sdk],
    );
    let query = useGetSelectQuery();
    const [{ data, error, loading }, switchNetwork] = useNetwork();
    const token = useSelector(selectToken);
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();

    const chainId = useChainId();
    const isConnectedCompatibleChain = !useNetworkMismatch();
    const connect = (connector: string) => {
      if (connector === 'injected') {
        connectWithMetamask();
        return;
      }
      if (connector === 'walletconnect') {
        connectWithWalletConnect();
        return;
      }
      return;
    };

    const onOpenConnectModal = useCallback(() => {
      onMoveAnimation('connect-wallet-overlay', 'moveInOpacity');
    }, [onMoveAnimation]);

    const onCloseConnectModal = useCallback(
      () => onMoveAnimation('connect-wallet-overlay', 'moveOutOpacity'),
      [onMoveAnimation],
    );
    const dispatch = useAppDispatch();
    const onCheckBeforeRequest = useCallback(async () => {
      if (!account) {
        onOpenConnectModal();
        return false;
      }
      if (!isConnectedCompatibleChain) {
        switchNetwork?.(parseInt(process.env.REACT_APP_BASE_CHAIN_ID || '280'));
        toast.info('Hmm! Look like you connected incompatible network');
        return false;
      }
      return true;
    }, [token, account, isConnectedCompatibleChain]);

    return (
      <WrappedComponent
        {...{
          ...props,
          connectWithMetamask,
          connectWithWalletConnect,
          account,
          chainId,
          onCloseConnectModal,
          onOpenConnectModal,
          disconnect,
          isConnectedCompatibleChain,
          token,
          onCheckBeforeRequest,
          connect,
          nativeBalance,
          onSigninWallet,
          query,
        }}
      />
    );
  };

export default withConnect;
