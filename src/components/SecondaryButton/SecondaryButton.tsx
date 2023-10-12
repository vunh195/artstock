import React from 'react';
import { Wrapper } from './SecondaryButton.styled';
// import LoadingButton from '@mui/lab/LoadingButton';
interface IPropButton {
  children: React.ReactNode | React.ReactNode[];
  handleClick?: () => void;
  isLoading?: boolean;
  isDisabled?: number;
}
export const SecondaryButton = ({
  children,
  handleClick,
  isLoading,
  isDisabled,
}: IPropButton) => {
  return (
    <Wrapper
      className={`btn-secondary-tg ${isDisabled === 1 && 'disabled'}`}
      onClick={() => {
        isDisabled !== 1 && handleClick && handleClick();
      }}
    >
      <div>{children}</div>
    </Wrapper>
  );
};

export default SecondaryButton;
