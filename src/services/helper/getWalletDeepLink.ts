export const getWalletDeepLink = (connectorName: string) => {
  const dAppUrl = window?.location?.href;
  if (!dAppUrl) {
    return '';
  }
  const deepLinks: any = {
    injected: `https://metamask.app.link/dapp/${dAppUrl}`,
    walletlink: `https://go.cb-w.com/dapp?cb_url=${dAppUrl}`,
  };
  if (connectorName === 'injected' || connectorName === 'walletlink') {
    return deepLinks[connectorName];
  }
  return undefined;
};
