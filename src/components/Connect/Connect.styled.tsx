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
  .connect-form {
    background-color: rgb(42, 42, 45);
    width: 400px;
    font-family: Montserrat;
    border-radius: 4px;
    padding: 20px;
    color: ${(props) => props.theme.color2};
    .connectors {
      margin-top: 16px;
      display: flex;
      gap: 14px;
      x &:hover {
        background-color: none;
      }
      .connector {
        img {
          width: 60px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .description {
        margin-top: 8px;
        font-size: 14;
        color: ${(props) => props.theme.color2};
      }
    }
    .connect-network {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      justify-content: space-between;
      margin-top: 14px;
      gap: 12px;
      margin-bottom: 12px;
      div {
        text-transform: uppercase;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 50%;
        opacity: 0.2;
        cursor: not-allowed;
        border: 1px solid rgb(179, 172, 171);
        border-radius: 4px;
        &.active {
          cursor: pointer;
          opacity: 1;
          border: none;
          background-color: rgba(75, 85, 99, 1);
        }
        img {
          width: 30px;
        }
      }
    }
  }
`;
