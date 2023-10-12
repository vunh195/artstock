import React from 'react';
import { Wrapper } from './Footer.styled';
import { toast } from 'react-toastify';

export const Footer = ({ withParalax }: any) => {
  return (
    <Wrapper id={`${!withParalax && 'footer-with-paralax'}`}>
      <div className="tg-container">
        <div className="footer">
          <div className="part part__1">
            <div className="logo">
              <img
                src={require('assets/logo/zera-logo-01.svg').default}
                alt=""
              />
            </div>
            <span className="content">
              {`Zera - A permission-less protocol that positions liquidity more effectively around the market price.`}
            </span>
            <div className="info-media">
              <img
                onClick={() => {
                  window.open('https://twitter.com/Zera_Protocol', 'blank');
                }}
                src={require('assets/Homepage/twitter.png').default}
                alt=""
              />

              <img
                onClick={() => {
                  toast.dismiss();
                  toast.info('Coming soon');
                }}
                src={require('assets/Homepage/telegram-plane.png').default}
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://discord.com/invite/NasyKYHH', 'blank');
                }}
                src={require('assets/Homepage/Discord.png').default}
                alt=""
              />
            </div>
          </div>
          <div className="part part__2">
            <div className="mini-part">
              <div
                className="mini-title"
                onClick={() => {
                  toast.dismiss();
                  toast.info('Coming soon');
                }}
              >
                Resources
              </div>
              <div className="mini-list">
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Documentation
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    window.open('https://github.com/ZeraProtocol', 'blank');
                  }}
                >
                  GitHub
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Blog{' '}
                </div>
              </div>
            </div>
            <div className="mini-part">
              <div className="mini-title">ZERA</div>
              <div className="mini-list">
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Token contract
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Buy Zera
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  View Coingecko
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  View Coinmarketcap
                </div>
              </div>
            </div>
            <div className="mini-part">
              <div
                className="mini-title"
                onClick={() => {
                  toast.dismiss();
                  toast.info('Coming soon');
                }}
              >
                Company
              </div>

              <div className="mini-list">
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Term of service
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  Brand kit
                </div>
                <div
                  className="mini-item"
                  onClick={() => {
                    toast.dismiss();
                    toast.info('Coming soon');
                  }}
                >
                  FAQ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
