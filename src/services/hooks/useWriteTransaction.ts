import { useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
// import { getWeb3 } from "../utils/getWeb3";

export const useWriteTransaction = () => {
  const signer = useSigner();

  const sendTransaction = async (
    contractAddress: string,
    abi: any,
    funcName: string,
    value: string,
    ...args: any[]
  ): Promise<any> => {
    try {
      console.log(...args);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const options = {
        value: ethers.utils.parseEther(value),
      };
      console.log('contract', contractAddress);
      console.log('funcName', funcName);
      console.log('value', value);
      const tx = await contract.functions[funcName](...args, options);

      const isSuccess = await tx.wait();
      isSuccess['rqTx'] = tx;
      return isSuccess;
    } catch (err: any) {
      //TODO: handle error
      toast.error(err?.message || err);
      console.log(err);
    }
  };
  return { sendTransaction };
};
