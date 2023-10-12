// export const useConnectWallet = () => {
//   const wallet = useWallet();
//   return async (walletName: string) => {
//     try {
//       if (
//         window.ethereum ||
//         walletName === 'walletconnect' ||
//         walletName === 'walletlink'
//       ) {
//         await wallet.connect(walletName);
//       } else {
//         const deepLink = getWalletDeepLink(walletName);
//         window.open(deepLink, '_blank');
//       }
//     } catch (err: any) {
//       toast.error(err?.message || err);
//     }
//   };
// };

// export const useChangeChain = () => {
//   const wallet = useWallet();
//   return (chainNum: any) => {
//     if (ChainId.MAINNET === chainNum) {
//       try {
//         wallet.ethereum?.send('wallet_switchEthereumChain', [
//           { chainId: '0x1' },
//           wallet.account,
//         ]);
//       } catch (err: any) {
//         toast.error(err?.message);
//       }
//     } else if (ChainId.BSC_TESTNET === chainNum) {
//       try {
//         wallet.ethereum?.send('wallet_switchEthereumChain', [
//           { chainId: '0x61' },
//           wallet.account,
//         ]);
//       } catch (err: any) {
//         toast.error(err?.message);
//       }
//     } else {
//       const params = cloneDeep(SUPPORTED_NETWORKS[chainNum || 1]);
//       delete params.chainNumb;
//       delete params.path;
//       delete params.pathDisable;
//       try {
//         wallet.ethereum?.send('wallet_addEthereumChain', [
//           params,
//           wallet.account,
//         ]);
//       } catch (err: any) {
//         toast.error(err?.message);
//       }
//     }
//   };
// };

// export const useCheckChainConnected = () => {
//   const wallet = useWallet();
//   const [isCompatible, setIsCompatible] = React.useState(false);
//   React.useEffect(() => {
//     if (wallet.status === 'connected') {
//       if (
//         ENVS.REACT_APP_BASE_CHAIN_ID.includes(wallet.chainId?.toString() || '')
//       ) {
//         setIsCompatible(true);
//       } else {
//         setIsCompatible(false);
//       }
//     }
//   }, [wallet.status, wallet.chainId]);
//   return isCompatible;
// };

// export const useCheckChain = () => {
//   const wallet = useWallet();
//   return useQuery(
//     ['useCheckChain.name'],
//     () => {
//       return {
//         chainId: wallet.chainId,
//         chainName: wallet.networkName,
//       };
//     },
//     {
//       enabled: !!wallet.account,
//       refetchInterval: 1000,
//     },
//   );
// };

// export const useCheckConnected = () => {
//   const [isConnected, setIsConnected] = React.useState(false);
//   const wallet = useWallet();
//   React.useEffect(() => {
//     if (wallet.status === 'connected') {
//       setIsConnected(true);
//     } else {
//       setIsConnected(false);
//     }
//   }, [wallet.status]);

//   return isConnected;
// };

// export const useCheckAccountActive = () => {
//   const wallet = useWallet();
//   if (wallet?.account) return wallet.account;
//   else return '';
// };

// export const useLogout = () => {
//   const wallet = useWallet();
//   const dispatch = useAppDispatch();
//   return () => {
//     wallet.reset();
//     dispatch(deleteAccount());
//   };
// };

export {};
