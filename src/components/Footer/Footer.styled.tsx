import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
  padding-top: 30px;
  background-color: #0f0e0e;
  color: ${(props) => props.theme.color2};
  border-top: 1px solid #606060;

  .footer {
    display: flex;

    justify-content: space-between;
    padding: 59px 0px;
    padding-bottom: 113px;
    gap: 30px;
    ${(props) => props.theme.mediaWidth.upToSmall`
             flex-direction: column;
      `}
    .logo {
      width: 200px;
      margin-left: -10px;
      img {
        width: 100%;
      }
    }
    .part {
      width: 50%;
      display: flex;
      flex-direction: column;
      ${(props) => props.theme.mediaWidth.upToSmall`
            width: 100%;
      `}
      &.part__2 {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .mini-part {
          .mini-title {
            font-family: ${(props) => props.theme.fontFamily.primaryFont};
            font-style: normal;
            font-weight: ${(props) => props.theme.fontWeight.fontBold};
            font-size: ${(props) => props.theme.fontSize.regular};
            line-height: 150%;
            /* identical to box height, or 24px */

            /* white */

            color: ${(props) => props.theme.color2};
            margin-bottom: 8px;
          }
          .mini-item {
            font-family: ${(props) => props.theme.fontFamily.primaryFont};
            font-style: normal;
            font-weight: ${(props) => props.theme.fontWeight.fontRegular};
            font-size: 14px;
            line-height: 150%;
            /* identical to box height, or 21px */

            /* neutral 4 */

            color: #b3b3b3;
            margin-top: 16px;
            cursor: pointer;
          }
        }
      }

      .info-media {
        margin-top: 53px;
        display: flex;
        align-items: center;
        gap: 14px;
        img {
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.04);
          }
        }
      }
      .content {
        font-family: ${(props) => props.theme.fontFamily.primaryFont};
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontRegular};
        font-size: 14px;
        line-height: 150%;
        /* or 21px */

        /* neutral 4 */

        color: #b3b3b3;
        max-width: 385px;
      }
      .content {
        margin-top: 14px;
        font-size: ${(props) => props.theme.fontSize.regular};
      }
      .title {
        font-size: 22px;
      }
    }
  }
`;
