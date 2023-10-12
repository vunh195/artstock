import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { deleteAccount } from 'reducers';
import { selectToken, selectAddress } from 'reducers/account/account.selectors';
import { useAddress } from '@thirdweb-dev/react';
import { setAccessToken } from 'services/utilities/http';

export const AccessTokenProvider = ({ children }: { children: any }) => {
  const isFirstTimeRender = useRef(true);
  const account = useAddress();
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const addressSigned = useSelector(selectAddress);
  useEffect(() => {
    setAccessToken(token);
  }, [token]);
  useEffect(() => {
    if (account && addressSigned?.toLowerCase() !== account.toLowerCase()) {
      dispatch(deleteAccount());
    }
    isFirstTimeRender.current = false;
  }, [account]);
  return children;
};
