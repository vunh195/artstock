import styled from 'styled-components';
import { keyframes } from 'styled-components';
const ldsellipsis1 = keyframes`  
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `;
const ldsellipsis2 = keyframes`  
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  `;
const ldsellipsis3 = keyframes`  
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  `;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999999;
  padding: 24px 0px;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: ${ldsellipsis1} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: ${ldsellipsis2}0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: ${ldsellipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: ${ldsellipsis3} 0.6s infinite;
  }
`;
