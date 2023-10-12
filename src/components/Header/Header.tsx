import React from 'react';
import { Wrapper } from './Header.styled';
import withWallet from 'hoc/withWallet';
import { Container } from 'components/Container/Container';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuForm from './Menu';
import { onMoveAnimation } from 'services/hooks/useDevelopUI';
const addressSplit = (addr: string) => {
  return (
    addr?.substr(0, 5) + '...' + addr?.substr(addr?.length - 4, addr?.length)
  );
};
export const HeaderComponent = ({
  account,
  onOpenConnectModal,
  nativeBalance,
  disconnect,
}: any) => {
  const history = useHistory();
  const [scrollPosition, setSrollPosition] = React.useState<any>(0);
  const handleScroll = (e: any) => {
    const headerAp = document.querySelector('#custom-header-ov') as HTMLElement;
    if (scrollPosition > e.currentTarget.scrollY) {
      if (headerAp) {
        headerAp.style.opacity = '1';
      }
    } else if (scrollPosition < e.currentTarget.scrollY) {
      if (headerAp) {
        headerAp.style.opacity = '0';
      }
    }
    setSrollPosition(e.currentTarget.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e), {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <Wrapper id={`custom-header-ov`}>
      <MenuForm />
      <Container>
        <div className="header">
          <div className="left-header">
            <div
              className="logo"
              onClick={() => {
                history.push('/');
              }}
            >
              <img
                src={require('assets/logo/horizontallogo.png').default}
                alt=""
              />
            </div>
            {/* <div className="nav-lists">
              <div
                className="nav-nav"
                onClick={() => {
                  history.push('/');
                }}
              >
                Home
              </div>
              <div
                className="nav-nav"
                onClick={() => {
                  history.push('/swap');
                }}
              >
                Swap
              </div>

              <div
                className="nav-nav"
                onClick={() => {
                  history.push('/liquidity');
                }}
              >
                Liquidity
              </div>
            </div> */}
          </div>
          <div
            className="menu"
            onClick={() => {
              onMoveAnimation('menu-modal-ov', 'moveInOpacity');
            }}
          >
            <span>Menu</span>
            <MenuIcon />
          </div>
          {!account ? (
            <div
              className="btn-launch-gt"
              onClick={() => {
                onOpenConnectModal();
              }}
            >
              <img
                src={require('assets/wallet/wallet_pink.png').default}
                alt=""
              />
              <span>Connect Wallet</span>
            </div>
          ) : (
            <div className="account-wrapper">
              <div className="account-info">
                <div className="account-hover">
                  {/* <div>Account Detail</div> */}
                  <div
                    onClick={() => {
                      disconnect();
                    }}
                  >
                    Disconnect
                  </div>
                </div>
                <div className="left">
                  <span className="account-balance">
                    {parseFloat(
                      nativeBalance?.displayValue || '0.00',
                    )?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 4,
                    })}
                  </span>
                  <img src={require('assets/wallet/eth.png').default} alt="" />
                  <span className="account-address">
                    {account ? addressSplit(account) : ''}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="account-detail" id="account-detail-ov"></div>
      </Container>
    </Wrapper>
  );
};

export const Header = withWallet(HeaderComponent);

export default Header;
