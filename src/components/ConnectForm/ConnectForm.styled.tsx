import styled from 'styled-components';

export const Wrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: white;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  .overlay {
    width: 100vw;
    height: 100vh;
    background: #151515cc;
    position: absolute;
    z-index: 0;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #212325;
    border-radius: 24px;
    padding: 16px;
    border-radius: 8px;
    overflow-y: scroll;
    width: 100%;
    max-width: 496px;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;
      .close-button {
        padding: 4px;
        cursor: pointer;
      }
    }
    .title {
      font-style: normal;
      font-weight: ${(props) => props.theme.fontWeight.fontRegular};
      font-size: 32px;
      ${(props) => props.theme.mediaWidth.upToExtraSmall`
        font-size: ${(props) => props.theme.fontSize.large};
            `}
      ${(props) => props.theme.mediaWidth.upToExtraSmall`
        font-size: ${(props) => props.theme.fontSize.regular};
            `}
    }
    .icon {
      color: white;
    }
    .button-connect {
      padding: 18px 28px 18px 28px;
      border-radius: 8px;
      gap: 8px;
      background: ${(props) => props.theme.color3};
      border: 1px solid ${(props) => props.theme.color3};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${(props) => props.theme.fontSize.superMedium};
      font-weight: ${(props) => props.theme.fontWeight.fontBold};
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 40px;
      cursor: pointer;
    }
    .connectors {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 40px;
      .connector {
        display: flex;
        padding: 16px;
        border-radius: 8px;
        gap: 16px;
        border: 1px solid #5e6b7e;
        cursor: pointer;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
        .connect {
          span {
            font-size: ${(props) => props.theme.fontSize.regular};
            font-weight: ${(props) => props.theme.fontWeight.fontRegular};
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: ${(props) => props.theme.color1};
          }
        }
        &.active {
          border: 2px solid ${(props) => props.theme.color3};
          .connect {
            span {
              color: #52b788;
            }
          }
        }
      }
    }
  }
`;
