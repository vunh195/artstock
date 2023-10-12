import styled, { ITheme } from 'styled-components';
export const Wrapper = styled.div`
  .summon__countdown-timer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    > span {
      font-family: 'Clash Display';
      font-style: normal;
      font-weight: ${(props) => props.theme.fontWeight.fontRegular};
      font-size: 32px;
      line-height: 39px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: capitalize;

      /* White/ 1 */

      color: ${(props) => props.theme.color2};
      margin: 0px 26px;
      margin-top: 19px;
      ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
                margin: 0px 13px;
                font-size: 32px;
                line-height: 39px;
                margin-top:6px;
               `}
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > span {
        margin-top: 16px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontRegular};
        font-size: ${(props) => props.theme.fontSize.regular};
        line-height: 22px;
        /* identical to box height, or 138% */

        text-align: center;

        /* White/ 1 */

        color: ${(props) => props.theme.color2};
        ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
                font-size: ${(props) => props.theme.fontSize.regular};
line-height: 22px;
               `}
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 86px;
        height: 79px;

        /* Black/ 10 */

        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 80px;
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontBold};
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: capitalize;
        color: ${(props) => props.theme.color2};
        ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToExtraSmall`
                font-size: ${(props) => props.theme.fontSize.superMedium};
                line-height: 25px;
                width: 52px;
                height: 55px;
               `}
      }
    }
    /* White/ 1 */
  }
`;
