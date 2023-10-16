import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 80px 0px;
  flex-direction: column;
  align-items: center;
  background: #f6f6f4;
  width: 100%;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1320px;
    gap: 16px;
    justify-content: center;
    align-items: flex-start;
    .grids {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .grid {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        .head {
          color: #212529;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 36px; /* 150% */
        }
        .pseudo {
          width: 70px;
          height: 2px;
          background: var(--neutral-800, #2c2c2c);
        }
        .item {
          color: var(--neutral-700, #4e4e4e);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .item-col {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 6px;
          color: var(--neutral-700, #4e4e4e);

          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          span {
            color: var(--neutral-700, #4e4e4e);

            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 150% */
          }
        }
      }
    }
  }
`;
