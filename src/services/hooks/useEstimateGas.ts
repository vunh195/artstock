import { useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
// import { getWeb3 } from "../utils/getWeb3";

export const useEstimateGas = () => {
  const signer = useSigner();

  return async (
    contractAddress: string,
    abi: any,
    funcName: string,
    value: string,
    ...args: any[]
  ) => {
    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const options = {
        value: ethers.utils.parseEther(value),
      };

      const tx = await contract.estimateGas[funcName](...args, options);

      return tx;
    } catch (error: any) {}
  };
};
