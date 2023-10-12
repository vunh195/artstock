import React from 'react';
import { ContainerWrapper } from './Container.styled';

export const Container = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <ContainerWrapper className="custom-container">
      <div className="content">{children}</div>
    </ContainerWrapper>
  );
};
