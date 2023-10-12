import styled, { ITheme } from 'styled-components';
export const ContainerWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
    padding: 0px 15px;
  `}
  .content {
    max-width: 1400px;
    width: 100%;
    position: relative;
  }
`;
