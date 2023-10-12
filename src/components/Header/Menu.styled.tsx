import styled from 'styled-components';

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
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .setting-form {
    background-color: rgb(42, 42, 45);
    width: 100%;
    height: 100%;
    font-family: Montserrat;
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
    .input-titles {
      font-size: 14px;
      margin-top: 16px;
      margin-bottom: 10px;
    }
    .border {
      width: 700px;
      height: 1px;
      background-color: ${(props) => props.theme.color2};
      opacity: 0.4;
      align-self: center;
      margin: 14px;
      margin-bottom: 0px;
    }

    .menu-nav {
      align-self: center;
      width: 800px;
      padding: 10px;
      background-color: rgba(38, 38, 38, 0.5);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: solid 1px rgba(50, 46, 45, 0.8);
      cursor: pointer;
     
      }
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
    }
    .setting-title {
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
  }
`;
