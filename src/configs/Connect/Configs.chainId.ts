export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  XDAI: 100,
  BSC: 56,
  BSC_TESTNET: 97,
  ARBITRUM: 42161,
  ARBITRUM_TESTNET: 79377087078960,
  MOONBEAM_TESTNET: 1287,
  AVALANCHE: 43114,
  AVALANCHE_TESTNET: 43113,
  HECO: 128,
  HECO_TESTNET: 256,
  HARMONY: 1666600000,
  HARMONY_TESTNET: 1666700000,
  OKEX: 66,
  OKEX_TESTNET: 65,
  CELO: 42220,
  PALM: 11297108109,
  PALM_TESTNET: 11297108099,
  MOONRIVER: 1285,
  FUSE: 122,
  ZKSYNCERA: 280,
  ZKSYNCERA_MAINNET: 324,
};

export declare enum EnumChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  CELO = 42220,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  MOONRIVER = 1285,
  FUSE = 122,
  ZKSYNCERA = 280,
  ZKSYNCERA_MAINNET = 324,
}

export const SUPPORTED_CHAINID = [
  // ChainId.MAINNET,
  ChainId.BSC,
  // ChainId.BSC_TESTNET,
  ChainId.ZKSYNCERA,
];

// export const activeChainID = {
//   chainId: 280,
//   rpc: ['https://zksync2-testnet.zksync.dev'],
//   nativeCurrency: {
//     decimals: 18,
//     name: 'zkSync Era Testnet',
//     symbol: 'zkETH',
//   },
//   shortName: 'zkSync', // Display value shown in the wallet UI
//   slug: 'zkSync', // Display value shown in the wallet UI
//   testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
//   chain: 'zkSync', // Name of the network
//   name: 'zkSync Era Testnet', // Name of the network
// };

export const activeChainID = {
  chainId: 56,
  rpc: ['https://bsc-dataseed.binance.org'],
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  shortName: 'BSC', // Display value shown in the wallet UI
  slug: 'BSC', // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: 'BSC', // Name of the network
  name: 'BSC Testnet', // Name of the network
};
