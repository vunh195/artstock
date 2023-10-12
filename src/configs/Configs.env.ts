import isEmpty from 'lodash/isEmpty';
import Web3 from 'web3';

declare global {
  interface Window {
    token: string;
    // ethereum: any;
    solana: any;
    web3: Web3;
  }
}

interface IENVS {
  FAST_REFRESH: boolean;
  REACT_APP_BASE_API: string;
  REACT_APP_BASE_CHAIN_ID: string[];
  REACT_APP_BUY_BOX_ADDRESS: string;
  REACT_APP_IS_PRODUCTION: string;
  REACT_APP_BUSD_ADDRESS: string;
  REACT_APP_USDT_ADDRESS: string;
}

const defaultEnvs: IENVS = {
  FAST_REFRESH: true,
  REACT_APP_BASE_API: '',
  REACT_APP_BASE_CHAIN_ID: [],
  REACT_APP_BUY_BOX_ADDRESS: '',
  REACT_APP_IS_PRODUCTION: '',
  REACT_APP_BUSD_ADDRESS: '',
  REACT_APP_USDT_ADDRESS: '',
};

export const getEnvs = () => {
  let envs: any = {};
  try {
    const PROCCESS_ENV = process.env;
    if (!isEmpty(PROCCESS_ENV)) {
      Object.keys(PROCCESS_ENV).forEach((key: string) => {
        const value = PROCCESS_ENV[key];
        if (key === 'REACT_APP_BASE_CHAIN_ID') {
          envs[key] = PROCCESS_ENV[key]?.split(',');
        } else {
          if (value === 'true' || value === 'false') {
            envs[key] = value === 'true';
          } else {
            envs[key] = PROCCESS_ENV[key];
          }
        }
        return key;
      });
    }
  } catch (error) {
    console.debug(error);
  } finally {
    envs = isEmpty(envs) ? defaultEnvs : envs;
  }
  return { ...envs };
};

export const ENVS: IENVS = getEnvs();
