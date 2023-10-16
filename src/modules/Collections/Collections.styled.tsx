import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 112px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .section1 {
    display: flex;
    padding: 24px 172px;
    display: flex;
    align-items: center;
    justify-content: space-bteween;
    flex-shrink: 0;
    background: #000;
    position: relative;
    border-radius: 40px;
    gap: 10%;
    .left {
      z-index: 2;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 32px;
      .title {
        color: #fff;

        font-size: 80px;
        font-style: normal;
        font-weight: 400;
        line-height: 88px; /* 110% */
        letter-spacing: -1.6px;
        text-transform: uppercase;
      }
      .subtitle {
        color: #fff;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px; /* 128.571% */
        letter-spacing: -0.28px;
      }
      button {
        display: flex;
        height: 48px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 12px;
        border: 1px solid var(--neutral-300, #e3e3de);
        background: var(--White, #fff);

        /* Shadow/xs */
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        color: var(--neutral-700, #50504e);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
        max-width: 205px;
      }
    }
    .right {
      z-index: 2;
      flex: 1;
      img {
        width: 100%;
        max-width: 540px;
      }
    }
  }
  .section2 {
    display: flex;
    padding: 120px 0px;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    max-width: 1320px;
    .title {
      color: #212529;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 120% */
      text-transform: capitalize;
    }
    .collection {
      max-height: 327px;

      display: flex;
      align-items: center;
      align-self: stretch;
      border-radius: 24px;
      background: #f6f6f4;
      .left {
        display: flex;
        max-width: 314px;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
        .col1 {
          flex: 1 0 0;
          align-self: stretch;
          img {
            width: 100%;
            border-radius: 24px 0px 0px 24px;
            height: 100%;
          }
        }
        .col2 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          flex: 1 0 0;
          align-self: stretch;
          overflow: hidden;
          .row1 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 0 0;
            align-self: stretch;
            img {
              width: 100%;
            }
          }
          .row2 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 0 0;
            align-self: stretch;
            img {
              height: 100%;
            }
          }
        }
      }
      .middle {
        display: flex;
        padding: 32px 40px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        align-self: stretch;
        .top {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
          .txt1 {
            display: flex;
            padding: 4px 12px;
            justify-content: center;
            align-items: center;

            color: var(--neutral-700, #50504e);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px; /* 128.571% */
            letter-spacing: 0.56px;
            text-transform: uppercase;
            border-radius: 16px;
            background: var(--neutral-100, #f6f6f4);
            mix-blend-mode: multiply;
          }
          .txt2 {
            align-self: stretch;
            color: #080808;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px; /* 150% */
          }
          .txt3 {
            align-self: stretch;
            color: #646669;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
          }
        }
        .bottom {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          .row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            flex: 1 0 0;
            .label {
              color: #646669;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 24px; /* 150% */
            }
            .value {
              align-self: stretch;
              color: #212529;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 28px; /* 140% */
              text-transform: capitalize;
            }
          }
        }
      }
      .right {
        display: flex;
        border-radius: 0px 24px 24px 0px;
        padding: 32px 40px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
        border-left: 4px solid #fff;

        background: #f6f6f4;
        .row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          flex: 1 0 0;
          .label {
            color: #646669;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
          }
          .value {
            align-self: stretch;
            color: #212529;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */
            text-transform: capitalize;
          }
        }
        .btn {
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
          font-weight: 500;
          line-height: 20px; /* 125% */
          width: 100%;
        }
      }
    }
  }
  .section5 {
    display: flex;
    padding: 80px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 120px 0px;
    position: relative;
    .bg {
      img {
        width: 100%;
      }
    }
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      padding: 80px 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      .title {
        color: #fff;
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px; /* 120% */
        text-transform: capitalize;
        width: 40%;
      }
      .sub {
        color: var(--grayscale-300, #dedede);
        text-align: center;
        /* White Label/Body/Book/M */
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
      .btn {
        display: flex;
        height: 64px;
        padding: 18px 28px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 16px;
        border: 1px solid var(--neutral-300, #e3e3de);
        background: var(--White, #fff);
        /* Shadow/xs */
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
        color: var(--neutral-700, #50504e);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 120% */
      }
    }
  }
`;
