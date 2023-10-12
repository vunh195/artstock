import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useMetamask } from '@thirdweb-dev/react';
import { useAddress } from '@thirdweb-dev/react';
import { isMobile } from 'react-device-detect';
import { onMoveAnimation } from 'services/hooks/useDevelopUI';
import { useNetworkMismatch } from '@thirdweb-dev/react';
import { useNetwork } from '@thirdweb-dev/react';

export const WalletProviders = ({ children }: { children: any }) => {
  const connectWithMetamask = useMetamask();
  const account = useAddress();
  const isFirstTimeRender = useRef(true);
  const isMismatched = useNetworkMismatch();
  const [{ data, error, loading }, switchNetwork] = useNetwork();

  useEffect(() => {
    if (isMobile && window?.ethereum) {
      connectWithMetamask();
    }
  }, []);
  useEffect(() => {
    if (account) {
      if (!isFirstTimeRender.current) {
        onMoveAnimation('connect-wallet-overlay', 'moveOutOpacity');
      }
      isFirstTimeRender.current = false;
    }
  }, [account]);
  useEffect(() => {
    if (account) {
      if (isMismatched) {
        switchNetwork?.(parseInt(process.env.REACT_APP_BASE_CHAIN_ID || '280'));
        toast.info('Hmm! Look like you connected incompatible network');
      }
    }
  }, [account, isMismatched]);
  return children;
};
