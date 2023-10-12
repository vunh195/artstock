import { useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import GALOPAIRABI from 'constants/abis/GP.json';
import { useReadContract } from './useReadContract';
import { toast } from 'react-toastify';

export const useSignTypedDataV4 = () => {
  const signer: any = useSigner();
  const { readContract } = useReadContract();
  return async (pairAddress: string, value: string, deadline: number) => {
    try {
      if (!signer) {
        toast.error('Connect wallet first...');
        return;
      }
      const address = await signer.getAddress();
      const nonce = await readContract(
        pairAddress,
        GALOPAIRABI,
        'nonces',
        '0',
        address,
      );

      const domain = {
        name: 'Galo LP',
        version: '1',
        chainId: parseInt(process.env.REACT_APP_BASE_CHAIN_ID || '280'),
        verifyingContract: pairAddress,
      };
      const types = {
        Permit: [
          { name: 'owner', type: 'address' },
          { name: 'spender', type: 'address' },
          { name: 'value', type: 'uint256' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      };
      const values = {
        owner: address,
        spender: process.env.REACT_APP_GALOROUTER,
        value: ethers.utils.parseEther(value),
        nonce: nonce,
        deadline: deadline,
      };

      const signature = await signer._signTypedData(domain, types, values);

      const signatureFormated = ethers.utils.splitSignature(signature);
      return signatureFormated;
    } catch (error: any) {
      toast.error(error || error?.message);
    }
  };
};
