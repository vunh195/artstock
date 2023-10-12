import { toast } from 'react-toastify';
import http from 'services/utilities/http';

export const getNonceRegistered = (address: string): any => {
  return http.get(`/auth/wallet/status?address=${address}`);
};

export const registerAndGetNonce = (
  address: string,
  chainId: number,
  referralFrom: string | undefined,
): any => {
  return http
    .post('/auth/wallet/register', {
      address,
      chainId,
      referralFrom,
    })
    .then((res) => res);
};

export const getSignature = async (nonce: string, sdk: any) => {
  const message = `${nonce}`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!sdk) {
    toast.error('Connection failed!');
  } else {
    const signature = await sdk.wallet.sign(message);
    return signature;
  }
  return undefined;
};

export const getAccessToken = (address: string, signature: string): any => {
  return http
    .post('auth/wallet/login', {
      address,
      signature: signature.toLowerCase(),
    })
    .then((res) => res);
};
