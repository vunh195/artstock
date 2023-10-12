import React, { FunctionComponent, useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
export const withLocomotive =
  (WrappedComponent: FunctionComponent) => (props: any) => {
    const containerRef = useRef(null);
    const scroll = useRef<any>();
    useEffect(() => {
      const headerAp = document.querySelector(
        '#custom-header-ov',
      ) as HTMLElement;
      if (window.innerWidth > 1024) {
        setTimeout(() => {
          scroll.current = new locomotiveScroll({
            el: containerRef.current,
            smooth: true,
            getDirection: true,
            resetNativeScroll: true,

            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          });
          if (scroll.current) {
            scroll.current.on('scroll', (e) => {
              if (headerAp) {
                if (e.direction === 'down') {
                  headerAp.style.opacity = '0';
                } else {
                  headerAp.style.opacity = '1';
                }
              }
            });
          }
        }, 1000);
      }

      return () => {
        if (scroll.current) scroll.current.destroy();
      };
    }, []);

    return (
      <WrappedComponent
        {...{
          ...props,
          scroll,
          containerRef,
        }}
      />
    );
  };

export default withLocomotive;
