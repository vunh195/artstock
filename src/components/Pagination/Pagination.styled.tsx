import styled from 'styled-components';
export const Wrapper = styled.div`
  margin-top: 20px;
  .cursor-pointer {
    cursor: pointer;
  }
  .opacity-50 {
    opacity: 0.5;
  }
  .mycustom-pagination {
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;

    .mycustom-page {
      display: flex;
      gap: 24px;
      justify-content: center;
      > span {
        color: #373843;
      }
      .page {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: ${(props) => props.theme.fontWeight.fontRegular};
        font-size: ${(props) => props.theme.fontSize.regular};
        color: #373843;
        width: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.page-active {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: ${(props) => props.theme.fontWeight.fontBold};
          font-size: ${(props) => props.theme.fontSize.regular};
          color: ${(props) => props.theme.color2};
          border-bottom: 2px solid ${(props) => props.theme.color2};
        }
      }
    }
  }
`;
