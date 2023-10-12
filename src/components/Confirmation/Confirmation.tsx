import React from 'react';
import { Wrapper } from './Confirmation.styled';
import { Container } from 'components/Container/Container';
import { onMoveAnimation } from 'services/hooks/useDevelopUI';
import CloseIcon from '@mui/icons-material/Close';
import withConnect from 'hoc/withWallet';
// import LoadingButton from '@mui/lab/LoadingButton';
export const Confirmation = ({ text }: any) => {
  return (
    <Wrapper id="confirmation-modal-ov" className="confirmation-modal">
      <div
        className="overlay"
        onClick={() => {
          onMoveAnimation('confirmation-modal-ov', 'moveOutOpacity');
        }}
      ></div>
      <Container>
        <div className="unbind-form">
          <div className="unbind-title">
            <div className="title">CONFIRMATION</div>
            <div
              className="btn-close"
              onClick={() => {
                onMoveAnimation('confirmation-modal-ov', 'moveOutOpacity');
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="border"></div>
          <div className="text">{text}</div>
          <div className="actions-btn">
            {
              <div
                className="btn-cancel confirm-no"
                onClick={() => {
                  onMoveAnimation('confirmation-modal-ov', 'moveOutOpacity');
                }}
              >
                Cancel
              </div>
            }

            <div
              className={`btn-submit confirm-yes`}
              onClick={() => {
                onMoveAnimation('confirmation-modal-ov', 'moveOutOpacity');
              }}
            >
              {/* <LoadingButton loading={false}> */}
              <div>OK</div>
              {/* </LoadingButton> */}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default withConnect(Confirmation);
