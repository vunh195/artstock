import styled from 'styled-components';
import dropBG from 'assets/bg__dropdown.png';

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 100%;
  color: white;
  z-index: 101;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  backdrop-filter: blur(40px);
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    .menu {
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid #666666;
      border-radius: 2px;
      display: none;
      ${(props) => props.theme.mediaWidth.upToExtraSmall`
         display: flex;
      `}

      span {
        font-family: ${(props) => props.theme.fontFamily.primaryFont};
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontBold};
        font-size: ${(props) => props.theme.fontSize.regular};
        line-height: 24px;
        /* identical to box height, or 150% */

        color: ${(props) => props.theme.color2};
      }
    }
    .left-header {
      display: flex;
      align-items: center;
      gap: 40px;
      .nav-lists {
        display: flex;
        align-items: center;
        gap: 24px;
        ${(props) => props.theme.mediaWidth.upToExtraSmall`
         display: none;
      `}
        .nav-nav {
          cursor: pointer;
          font-family: ${(props) => props.theme.fontFamily.primaryFont};
          font-style: normal;
          font-weight: ${(props) => props.theme.fontWeight.fontRegular};
          font-size: ${(props) => props.theme.fontSize.regular};
          line-height: 160%;
          /* identical to box height, or 26px */

          color: ${(props) => props.theme.color2};
          transition: all 0.3s;
          // padding: 8px 22px;
          // border-radius: 8px;
          &.hide-mobile {
            ${(props) => props.theme.mediaWidth.upToMedium`
        display: none;
        
      `}
          }
          &:hover {
          }
          &:active {
            transform: scale(0.85);
            opacity: 0.5;
          }
        }
      }
    }
    .btn-launch-gt {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px 10px 16px;
      border-radius: 8px;
      gap: 8px;
      color: ${(props) => props.theme.color3};

      border: 1px solid ${(props) => props.theme.color3};
      cursor: pointer;
      ${(props) => props.theme.mediaWidth.upToExtraSmall`
         display: none;
      `}
      img {
        width: 20px;
      }
      span {
        font-size: 14px;
        font-weight: ${(props) => props.theme.fontWeight.fontBold};
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: ${(props) => props.theme.color3};
      }
    }
    .logo {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .account-wrapper {
      ${(props) => props.theme.mediaWidth.upToMedium`
         display: none;
      `}
    }
    .account-info {
      cursor: pointer;
      padding: 10px 16px 10px 16px;
      border-radius: 8px;
      gap: 8px;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid ${(props) => props.theme.color3};
      .account-hover {
        bottom: 0;
        position: absolute;

        flex-direction: column;
        align-items: center;
        left: 50%;
        bottom: 0;
        transform: translateY(100%) translateX(-50%);
        background: url(${dropBG});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        min-width: 210px;
        color: #2c1b05;
        display: none;
        > div {
          font-size: 15px;
          text-align: center;
          padding: 15px 0px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #dcb85c;
          }
        }
        /* height: 1000px; */
        /* bottom: 0;
        left: 50%;
        transform: translateY(100%) translateX(-50%); */
      }
      &:hover {
        .account-hover {
          display: flex;
        }
      }
      .left {
        display: flex;
        gap: 8px;
        align-items: center;
        img {
          width: 20px;
        }
      }

      .account-address,
      .account-balance {
        font-size: 14px;
        font-weight: ${(props) => props.theme.fontWeight.fontBold};
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: ${(props) => props.theme.color3};
      }
    }
  }
`;
