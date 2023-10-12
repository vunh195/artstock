import styled from 'styled-components';
import { keyframes } from 'styled-components';
export const anim_scale = keyframes`
0%{
  transform: scale(1.1);
}
`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: 9999999999;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 1s;
  overflow: visible;
  .zera-logo {
    font-family: ${(props) => props.theme.fontFamily.secondaryFont};
    font-size: ${(props) => props.theme.fontSize.superLarge};
    font-weight: ${(props) => props.theme.fontWeight.fontBold};
    line-height: 72px;
    letter-spacing: -0.03em;
    text-align: center;
    color: ${(props) => props.theme.color1};

    transform: scale(1.5);
    animation: fade 0.9s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    ${(props) => props.theme.mediaWidth.upToMedium`
    font-size: ${(props) => props.theme.fontSize.veryLarge};
    `}
    ${(props) => props.theme.mediaWidth.upToSmall`
    font-size: ${(props) => props.theme.fontSize.avgLarge};
    `}
       ${(props) => props.theme.mediaWidth.upToExtraSmall`
    font-size: ${(props) => props.theme.fontSize.mediumLarge};
    `}
  }
`;
