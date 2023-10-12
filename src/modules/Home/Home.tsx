import React from 'react';
import { Wrapper } from './Home.styled';
import withConnect from 'hoc/withWallet';
import withLocomotive from 'hoc/withLocomotiveScroll';
const HomePage = ({ containerRef }: any) => {
  return (
    <Wrapper ref={containerRef} data-scroll-container>
      Homepage
    </Wrapper>
  );
};

export default withConnect(withLocomotive(HomePage));
