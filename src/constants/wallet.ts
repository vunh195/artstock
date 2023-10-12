export interface IWallet {
  name: string;
  path: string;
  connector: string;
  description: string;
}

export const WALLET: IWallet[] = [
  {
    name: 'Metamask',
    path: 'metamask.png',
    connector: 'injected',
    description: 'Mobile Wallet and Extension',
  },

  {
    name: 'Wallet Connect',
    path: 'walletconnect.png',
    connector: 'walletconnect',
    description: 'Connector',
  },
];
