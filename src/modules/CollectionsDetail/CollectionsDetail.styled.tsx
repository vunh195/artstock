import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 112px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .images {
    display: flex;
    max-width: 1320px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    .col {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      flex-shrink: 0;
      align-self: stretch;
      max-height: 520px;
      img {
        width: 100%;
        &.left {
          border-radius: 40px 0px 0px 40px;
        }
      }
      .row {
        display: flex;
        align-items: flex-start;
        flex: 1 0 0;
        gap: 4px;
        align-self: stretch;
        img {
          width: 100%;
          &.top-right {
            border-radius: 0px 40px 0px 0px;
          }
        }
        .col2 {
          flex: 1 0 0;
          align-self: stretch;
          img {
            width: 100%;
            &.bottom-right {
              border-radius: 0px 0px 40px 0px;
            }
          }
        }
      }
    }
  }
  .content {
    display: flex;
    max-width: 1320px;
    align-items: flex-start;
    gap: 48px;
    margin: 48px 0px;
    .left {
      flex: 0.7;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      .title {
        color: #212529;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px; /* 120% */
        text-transform: capitalize;
      }
      .tabs {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        // overflow-x: scroll;
        .tab {
          display: flex;
          height: 40px;
          padding: 0px 16px;
          justify-content: center;
          width: fit-content;
          align-items: center;
          border-radius: 40px;
          background: #cfcfcb;
          white-space: nowrap;
          &.active {
            background: #292926;
          }
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 142.857% */
        }
      }
      .row-data {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 20px;
        align-self: stretch;
        // flex-wrap: wrap;
        .label {
          color: #212529;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          flex: 0.2;
          line-height: 28px; /* 140% */
        }
        .txt {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          color: #646669;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
        }
      }
      .pseudo {
        height: 2px;
        align-self: stretch;
        background: #eee;
      }
    }
    .right {
      flex: 0.3;
      flex-direction: column;
      display: flex;
      gap: 16px;
      .asset-value {
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        border-radius: 24px;
        border: 1px solid var(--grayscale-300, #dedede);
        background: var(--White, #fff);
      }
      .value {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }
      .row1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        align-self: stretch;
      }
      .btn {
        width: 100%;
        display: flex;
        height: 48px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 12px;
        border: 1px solid var(--neutral-900, #0f0f0e);
        background: var(--neutral-900, #0f0f0e);
        /* Shadow/xs */
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        color: var(--White, #fff);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 125% */
        text-transform: capitalize;
      }

      .label {
        align-self: stretch;
        color: #646669;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
      .val2 {
        color: #212529;
        text-align: right;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
      }
      .val {
        align-self: stretch;
        color: #212529;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
        text-transform: capitalize;
      }
      .head {
        color: #212529;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 140% */
      }
      .investment-overview {
        display: flex;
        padding: 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        border-radius: 24px;
        background: #f6f6f4;
      }
      .comparable {
        display: flex;
        padding: 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        border-radius: 24px;
        background: #f6f6f4;
        img {
          max-width: 360px;
          margin-top: 48px;
        }
      }
      .asset-overview {
        display: flex;
        padding: 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        border-radius: 24px;
        background: #f6f6f4;
      }
    }
  }
  .exhibitions-details {
    display: flex;
    max-width: 1320px;
    padding: 120px 0px;
    justify-content: center;
    align-items: center;
    gap: 64px;
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      flex: 1 0 0;
      .title {
        color: #212529;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px; /* 120% */
        text-transform: capitalize;
      }
      .txt {
        color: #646669;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
    }
    .right {
      flex: 1 0 0;
      img {
        width: 100%;
      }
    }
  }
`;
