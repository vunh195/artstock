import styled from 'styled-components';
import dashBg from 'assets/Swap/dash.svg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000000000;
  font-weight: ${(props) => props.theme.fontWeight.fontMedium};
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .custom-container {
    width: fit-content;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }
  .unbind-form {
    background-color: rgb(42, 42, 45);
    width: 400px;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    border-radius: 4px;
    padding: 20px;
    color: ${(props) => props.theme.color2};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 500px;
    ${(props) => props.theme.mediaWidth.upToExtraSmall`
        min-width: unset;
        
      `}
    .title {
      font-size: 22;
      font-weight: ${(props) => props.theme.fontWeight.fontMedium};
    }
    .actions-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 32px;
      button {
        font-family: ${(props) => props.theme.fontFamily.primaryFont};
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontBold};
        font-size: ${(props) => props.theme.fontSize.regular};
        color: ${(props) => props.theme.color2};
        padding: 0;
        white-space: nowrap;
        span {
          font-family: ${(props) => props.theme.fontFamily.primaryFont};
          font-style: normal;
          font-weight: ${(props) => props.theme.fontWeight.fontBold};
          font-size: ${(props) => props.theme.fontSize.regular};
          color: black;
          padding: 0;
          white-space: nowrap;
        }
        div {
          font-family: ${(props) => props.theme.fontFamily.primaryFont};
          font-style: normal;
          font-weight: ${(props) => props.theme.fontWeight.fontBold};
          font-size: ${(props) => props.theme.fontSize.regular};
          color: black;
          padding: 0;
          white-space: nowrap;
        }
      }
      .btn-cancel {
        border-radius: 4px;
        width: 48%;
        cursor: pointer;
        border: solid 1px #aefee3;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
      }
      .btn-submit {
        border-radius: 4px;
        width: 48%;
        cursor: pointer;
        background-color: #aefee3;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        color: black;
        text-transform: capitalize;
        button {
          color: black;
          text-transform: capitalize;
        }
        &.disable {
          color: #7e7e7c !important;
          border: none !important;
          background: rgba(38, 38, 38, 0.8) !important;
          cursor: context-menu;
          span {
            color: #7e7e7c !important;
          }
          div {
            color: #7e7e7c !important;
          }
        }
      }
    }
    .swap-section-input-container {
      margin-top: 8px;
      width: 100%;
      padding: 10px;
      background-color: rgba(38, 38, 38, 0.5);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding: 2px 12px;
      .borders {
        height: 40px;
        width: 1px;
        opacity: 0.4;
        background-color: ${(props) => props.theme.color2};
        margin-right: 4px;
        &.opacity-0 {
          opacity: 0;
        }
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }
      input {
        background-color: transparent;
        max-width: 100%;
        font-size: var(--font-lg);
        border: none;
        outline: none;
        padding: 10px;
        width: 100%;
        color: ${(props) => props.theme.color2};
        font-size: 14px;
        padding: 0 2rem 0 0;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
        }
      }

      .btn-max {
        font-size: 12px;
        color: #6c757d;
        transition: all 0.3s;
        cursor: pointer;
        padding: 4px;
        min-width: 33px;
        font-weight: ${(props) => props.theme.fontWeight.fontRegular};
        transition: all 0.3s;
        &:hover {
          color: ${(props) => props.theme.color2};
          font-weight: ${(props) => props.theme.fontWeight.fontMedium};
        }
      }
    }
    .lkmsres-item {
      display: flex;
      gap: 2px;
      align-items: center;
      margin-top: 8px;
      font-size: 13px;
      > span {
        white-space: nowrap;
        font-weight: ${(props) => props.theme.fontWeight.fontRegular};
        color: rgb(108, 107, 125);
      }
      .border-lkmsres {
        margin-top: 2px;
        height: 1px;
        width: 100%;
        background: url(${dashBg}) repeat-x;
        background-size: 11px;
        opacity: 0.5;
      }
      .res-lkmsres {
        white-space: nowrap;
        display: flex;
        gap: 4px;
        svg {
          opacity: 0.5;
          font-size: ${(props) => props.theme.fontSize.superMedium};
          margin-left: 6px;
        }
        span {
          white-space: nowrap;
        }
      }
    }
    .balance {
      color: #6c757d;
      font-size: 11px;
      font-weight: ${(props) => props.theme.fontWeight.fontRegular};
      align-self: flex-end;
      margin-bottom: 14px;
      margin-top: 4px;
    }
    .unbind-tabs {
      display: flex;
      gap: 4px;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border: solid 1px #3d3d3d;
        border-radius: 4px;
        font-weight: ${(props) => props.theme.fontWeight.fontMedium};
        font-size: 13px;
        color: ${(props) => props.theme.color1};
        &:hover {
          background-color: rgb(36, 38, 34);
          cursor: pointer;
        }
        &.active {
          border: none;
          background-color: #aefee3;
          color: black;
        }
      }
    }
    .unbind-title {
      display: flex;
      align-items: center;
      width: 100%;

      justify-content: space-between;
      .btn-close {
        svg {
        }
        cursor: pointer;
      }
    }
    .input-titles {
      font-size: 15px;
      margin-top: 16px;
      margin-bottom: 10px;
      font-weight: ${(props) => props.theme.fontWeight.fontMedium};
    }
    .text {
      text-align: center;
    }
    .border {
      width: 700px;
      height: 1px;
      background-color: ${(props) => props.theme.color2};
      opacity: 0.4;
      align-self: center;
      margin: 14px;
    }
  }
`;
