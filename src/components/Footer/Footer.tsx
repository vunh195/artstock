import React from 'react';
import { Wrapper } from './Footer.styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InfoIcon from '@mui/icons-material/Info';
export const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="logo">
          <img src={require(`assets/footer.png`).default} alt="" />
        </div>
        <div className="grids">
          <div className="grid">
            <div className="head">About Artstocks</div>
            <div className="pseudo"></div>
            <div className="item">About us</div>
            <div className="item">Contact us</div>
            <div className="item">National work</div>
            <div className="item">International work</div>
          </div>
          <div className="grid">
            <div className="head">Visit Us Now</div>
            <div className="pseudo"></div>
            <div className="item">
              <div className="ic">
                <FacebookIcon />
              </div>
              <div> /artstock</div>
            </div>
            <div className="item">
              <div className="item">
                <div className="ic">
                  <TwitterIcon />
                </div>
                <div> /artstock</div>
              </div>
            </div>
            <div className="item">
              <div className="item">
                <div className="ic">
                  <YouTubeIcon />
                </div>
                <div> /artstock-tv</div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="head">Visit Us Now</div>
            <div className="pseudo"></div>
            <div className="item-col">
              Cromwell Road New Town SW7 <span>Sai Gon - Viet Nam</span>
            </div>
            <div className="item">
              <div className="ic">
                <InfoIcon />
              </div>
              <div> +84 382 68 68 68</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
