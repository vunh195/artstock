import { SUPPORTED_NETWORKS_ARRAY } from 'configs/Connect/Configs.networks';

export const getScannerAddress = (chainNumb: number, address: string) => {
  const network = SUPPORTED_NETWORKS_ARRAY.find(
    (network) => network.chainNumb === chainNumb,
  );
  const scanner = network?.blockExplorerUrls;
  return `${scanner}/address/${address}`;
};
