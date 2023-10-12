import { SUPPORTED_NETWORKS } from 'configs/Connect/Configs.networks';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
// import { getWeb3 } from "../utils/getWeb3";
export const useReadContract = () => {
  const readContract = async (
    contractAddress: string,
    abi: any,
    funcName: string,
    value: string,
    ...args: any[]
  ): Promise<any> => {
    try {
      const jsonRpcProviderinherits = new ethers.providers.JsonRpcProvider(
        SUPPORTED_NETWORKS[
          parseInt(process.env.REACT_APP_BASE_CHAIN_ID || '280')
        ]?.rpc[0],
      );
      console.log('jsonRPC', jsonRpcProviderinherits);
      if (jsonRpcProviderinherits) {
        const contract = new ethers.Contract(
          contractAddress,
          abi,
          jsonRpcProviderinherits,
        );
        const response = await contract[funcName](...args);
        return response;
      } else {
        toast.error('jsonRpc Error!');
      }
      return;
    } catch (err: any) {
      console.log('error contract');
      console.log(err);
    }
  };
  return { readContract };
};
