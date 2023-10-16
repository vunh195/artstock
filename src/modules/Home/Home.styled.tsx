import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 112px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .section1 {
    display: flex;
    padding: 168px 172px;
    display: flex;
    align-items: flex-start;
    justify-content: space-bteween;
    flex-shrink: 0;
    gap: 20%;
    position: relative;
    .bg {
      background: linear-gradient(180deg, #0f0f0e 0%, #e9ecf7 100%);
      background-blend-mode: multiply, normal;
      position: absolute;
      border-radius: 40px;

      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 70%;
    }
    .left {
      z-index: 2;
      width: 40%;
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
        color: var(--White, #fff);
        height: 48px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
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
        max-width: 205px;
      }
    }
    .right {
      z-index: 2;
      flex: 1;
      img {
        max-width: 540px;
        flex: 1;
        width: 100%;
      }
    }
  }
  .section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px 0px;
    .title {
      color: #212529;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 120% */
      text-transform: capitalize;
      margin-bottom: 64px;
    }
    .cards {
      display: flex;
      align-items: center;
      gap: 16px;
      .card {
        display: flex;
        padding: 40px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        flex: 1 0 0;
        border-radius: 24px;
        background: #f0f0ec;
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        .head1 {
          color: #212529;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px; /* 133.333% */
          text-transform: capitalize;
        }
        .head2 {
          color: #646669;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 150% */
        }
        .head3 {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          .num1 {
            color: #212529;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */
            text-transform: capitalize;
          }
          .num2 {
            color: #646669;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 150% */
          }
        }
      }
    }
  }
  .section3 {
    display: flex;
    max-width: 1320px;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    margin: 120px 0px;
    .title {
      color: #212529;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 120% */
      text-transform: capitalize;
    }
    .collection {
      display: flex;
      flex-direction: column;
      align-items: center;

      .top {
        position: relative;
        .bg {
          img {
            width: 100%;
            border-radius: 40px 40px 0px 0px;
          }
        }
        .info {
          display: flex;
          padding: 24px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 24px;
          position: absolute;
          right: 24px;
          border-radius: 24px;
          border: 1px solid #e3e3de;

          background: rgba(246, 246, 244, 0.8);

          backdrop-filter: blur(10px);
          top: 30px;
          .stats {
            display: flex;
            align-items: center;
            gap: 24px;
            align-self: stretch;
            .row {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 5px;
              flex: 1 0 0;
              .txt1 {
                color: #646669;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 150% */
              }
              .txt2 {
                color: #212529;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px; /* 140% */
                text-transform: capitalize;
              }
            }
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
            font-weight: 500;
            line-height: 20px; /* 125% */
          }
        }
      }
      .bottom {
        display: flex;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        align-self: stretch;
        border-radius: 0px 0px 40px 40px;
        border: 1px solid #e3e3de;

        background: #f6f6f4;
        .txt1 {
          color: var(--neutral-700, #50504e);
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px; /* 128.571% */
          letter-spacing: 0.56px;
          text-transform: uppercase;
        }
        .txt2 {
          color: #080808;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 36px; /* 150% */
        }
        .txt3 {
          color: #646669;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 150% */
        }
      }
    }
    .btn-view {
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
  .section4 {
    display: flex;
    width: 1728px;
    padding: 120px 0px;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    .title {
      color: #212529;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 120% */
      text-transform: capitalize;
    }
    .row {
      .left {
        flex: 1 0 0;

        img {
          border-radius: 40px 0px 0px 40px;
          width: 100%;
          height: 100%;
        }
      }
      .right {
        display: flex;
        padding: 64px;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 0px 40px 40px 0px;
        background: #f6f6f4;
        .questions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
          border-radius: 16px;
          .question-wrapper {
            display: flex;
            padding: 24px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            background: var(--grayscale-200, #ededed);
            gap: 16px;
            align-self: stretch;
            cursor: pointer;
            height: 12%;
            overflow: hidden;
            transition: all 0.3s;
            &.more {
              flex: 1;
              //   border-radius: 16px 16px 0px 0px;
            }
            .question {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              align-self: stretch;
              .txt {
                flex: 1 0 0;
                color: var(--grayscale-800, #2c2c2c);
                /* White Label/Body/Medium/M */
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 150% */
              }
            }
            .answer {
              color: var(--grayscale-600, #6b6b6b);
              /* White Label/Interface/Book/S */
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 18px; /* 128.571% */
            }
          }
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
  .section6 {
    display: flex;
    margin: 120px 0px;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    .title {
      color: #212529;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px; /* 120% */
      text-transform: capitalize;
    }
    .faqs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      max-width: 1320px;
      .faq {
        display: flex;
        padding: 48px;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        border-radius: 24px;
        background: var(--grayscale-100, #f5f5f5);
        height: 96px;
        overflow: hidden;
        transition: all 0.3s;
        cursor: pointer;
        &.more {
          height: auto;
        }
        .txt {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 48px;
          flex: 1 0 0;
          .q {
            align-self: stretch;
            color: var(--grayscale-900, #0f0f0f);
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 120% */
          }
          .a {
            align-self: stretch;
            color: var(--grayscale-600, #6b6b6b);
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 120% */
          }
        }
        .ic {
        }
      }
    }
  }
`;
