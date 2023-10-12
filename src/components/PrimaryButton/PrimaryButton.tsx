import React from 'react';
import { Wrapper } from './PrimaryButton.styled';
// import LoadingButton from '@mui/lab/LoadingButton';
interface IPropButton {
  children: React.ReactNode | React.ReactNode[];
  handleClick?: () => void;
  isLoading?: boolean;
  isDisabled?: number;
}
export const PrimaryButton = ({
  children,
  handleClick,
  isLoading,
  isDisabled,
}: IPropButton) => {
  return (
    <Wrapper
      className={`btn-primary-tg ${isDisabled === 1 && 'disabled'}`}
      onClick={() => {
        isDisabled !== 1 && handleClick && handleClick();
      }}
    >
      <div>{children}</div>
    </Wrapper>
  );
};

export default PrimaryButton;
