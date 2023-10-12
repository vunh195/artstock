import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.color3};
  border-radius: 4px;
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

  color: white;
  &.disabled {
    color: #7e7e7c !important;
    border: none !important;
    background: ${(props) => props.theme.color3} !important;
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
    color: black;
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
