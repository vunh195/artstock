// import { IconButton } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { Wrapper } from './ConnectForm.styled';
import { WALLET } from 'constants/wallet';
import CloseIcon from '@mui/icons-material/Close';
import withWallet from 'hoc/withWallet';

const ConnectFormComponent = ({
  connect,
  onCloseConnectModal,
  account,
}: any) => {
  const [activeWallet, setActiveWallet] = useState(0);
  useEffect(() => {
    account && onCloseConnectModal();
  }, [account]);
  return (
    <Wrapper id="connect-wallet-overlay">
      <div className="overlay" onClick={onCloseConnectModal} />
      <div className="form">
        <div className="header">
          {/* <IconButton onClick={onCloseConnectModal} className="icon"> */}
          <div className="close-button" onClick={onCloseConnectModal}>
            <CloseIcon />
          </div>
          {/* </IconButton> */}
        </div>
        <span className="title">Get started</span>
        <span className="subtitle">
          Connect your wallet to start using the app.
        </span>
        <div className="connectors">
          {WALLET.map((wallet, index) => (
            <div
              key={index}
              className={`connector ${activeWallet === index && 'active'}`}
              onClick={() => {
                setActiveWallet(index);
              }}
            >
              <img
                className="wallet-image"
                src={require(`../../assets/wallet/${wallet.path}`).default}
                alt={wallet.name}
              />
              <div className="connect">
                <span className="">{wallet.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={async () => {
            await connect(WALLET[activeWallet]?.connector);
          }}
          className="button-connect"
        >
          Connect
        </div>
      </div>
    </Wrapper>
  );
};

export const ConnectForm = memo(withWallet(ConnectFormComponent));
export default ConnectForm;
