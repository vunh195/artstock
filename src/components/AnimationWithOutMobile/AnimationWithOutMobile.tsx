import React from 'react';
import { Wrapper } from './AnimationWithOutMobile.styled';
import UseIntersection from 'components/UseIntersection/UseIntersection';
// import { Wrapper } from "./AnimationWithOutMobile.styled";
const AnimationWithOutMobile = ({ children, animateIn, delay, cln }: any) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isFirst, setIsFirst] = React.useState<any>(false);
  return window.innerWidth >= 1024 ? (
    <Wrapper
      ref={ref}
      className={`${window.innerWidth > 600 ? 'animate__animated' : ''}  ${
        UseIntersection(ref, '-100px', (val) => {
          setIsFirst(val);
        }) || isFirst
          ? animateIn
          : ''
      } ${
        !isFirst && window.innerWidth > 600 ? 'opacity--0' : ''
      } ${delay} ${cln}`}
    >
      {children}
    </Wrapper>
  ) : (
    <Wrapper className={`${cln}`}> {children}</Wrapper>
  );
};

export default AnimationWithOutMobile;
