import React, { useMemo } from 'react';
import { Wrapper } from './SuccessPopup.styled';
import { Container } from 'components/Container/Container';
import { onMoveAnimation } from 'services/hooks/useDevelopUI';
import CloseIcon from '@mui/icons-material/Close';
import withConnect from 'hoc/withWallet';
// import LoadingButton from '@mui/lab/LoadingButton';
import { ethers } from 'ethers';
import DirectionsIcon from '@mui/icons-material/Directions';
import bigDecimal from 'js-big-decimal';
export const SuccessPopup = ({ successInfo }: any) => {
  console.log(successInfo);
  const refed = useMemo(() => {
    if (
      bigDecimal.compareTo(
        bigDecimal.multiply(
          successInfo?.tx?.rqTx?.gasPrice,
          successInfo?.tx?.rqTx?.gasLimit,
        ),
        '0',
      ) === 0
    )
      return '100';
    return (
      100 -
      parseFloat(
        bigDecimal.divide(
          bigDecimal.multiply(
            successInfo?.tx?.gasUsed,
            successInfo?.tx?.effectiveGasPrice,
          ),
          bigDecimal.multiply(
            successInfo?.tx?.rqTx?.gasPrice,
            successInfo?.tx?.rqTx?.gasLimit,
          ),
          4,
        ),
      ) *
        100
    )?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }, [successInfo]);
  return (
    <Wrapper id="success-popup-modal-ov" className="success-popup-modal">
      <div
        className="overlay"
        onClick={() => {
          onMoveAnimation('success-popup-modal-ov', 'moveOutOpacity');
        }}
      ></div>
      <Container>
        <div className="unbind-form">
          <div className="unbind-title">
            <div className="title">TRANSACTION INFO</div>
            <div
              className="btn-close"
              onClick={() => {
                onMoveAnimation('unbind-modal-ov', 'moveOutOpacity');
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="border"></div>
          <div className="text">{successInfo?.text}</div>
          <div className="infomat">
            <div>
              <span>Gas estimated:</span>
              <div className="border-res"></div>
              <div className="res-r">
                {ethers.utils.formatEther(
                  bigDecimal.multiply(
                    successInfo?.tx?.rqTx?.gasPrice,
                    successInfo?.tx?.rqTx?.gasLimit,
                  ) || '0',
                )}{' '}
                ETH
              </div>
            </div>
            <div>
              <span>Gas used:</span>
              <div className="border-res"></div>
              <div className="res-r">
                {ethers.utils.formatEther(
                  bigDecimal.multiply(
                    successInfo?.tx?.gasUsed,
                    successInfo?.tx?.effectiveGasPrice,
                  ) || 0,
                )}{' '}
                ETH
              </div>
            </div>
          </div>
          <div
            className="btn-open"
            onClick={() => {
              window.open(
                `https://explorer.zksync.io/tx/${successInfo?.tx?.transactionHash}`,
                'blank',
              );
            }}
          >
            <span>{refed} % of gas fee was unused and refunded</span>
            <DirectionsIcon />
          </div>
          <div className="actions-btn">
            <div
              className={`btn-submit`}
              onClick={() => {
                onMoveAnimation('success-popup-modal-ov', 'moveOutOpacity');
              }}
            >
              <div>
                <div>OK</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default withConnect(SuccessPopup);
