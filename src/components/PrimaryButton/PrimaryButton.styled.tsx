import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  background: linear-gradient(
    95.39deg,
    #ff9533 -6.15%,
    #ea33ff 37.52%,
    #726dff 78.36%,
    #33ceff 102.75%
  );
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 40px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.fontBold};
  font-size: ${(props) => props.theme.fontSize.regular};
  /* identical to box height, or 150% */

  /* white */

  color: ${(props) => props.theme.color2};
  &.disabled {
    color: #7e7e7c !important;
    border: none !important;
    background: rgba(38, 38, 38, 0.5) !important;
    cursor: context-menu;
    button {
      cursor: context-menu;
      color: #7e7e7c !important;
    }
  }
  ${(props) => props.theme.mediaWidth.upToExtraSmall`
       padding: 16px 24px;
        
      `}
  button {
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-style: normal;
    font-weight: ${(props) => props.theme.fontWeight.fontBold};
    font-size: ${(props) => props.theme.fontSize.regular};
    color: ${(props) => props.theme.color2};
    padding: 0;
    white-space: nowrap;
    text-transform: capitalize;
  }
  .btn-icon {
    margin-left: 6px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color2};
    border-radius: 50%;
    border: solid 1px ${(props) => props.theme.color2};
    svg {
      color: ${(props) => props.theme.color2};
      font-size: ${(props) => props.theme.fontSize.superMedium};
    }
  }
`;
