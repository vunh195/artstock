import React, { memo } from 'react';
import { Wrapper } from './LoadingEle.styled';

const LoadingComponent = () => {
  return (
    <Wrapper>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export const LoadingEle = memo(LoadingComponent);

export default LoadingEle;
