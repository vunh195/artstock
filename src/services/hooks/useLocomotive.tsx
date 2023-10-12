import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotiveScroll(start) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (!start) return;
    let locoScroll: any = null;

    const scrollEl = document.querySelector('#main-container');

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      getDirection: true,
      resetNativeScroll: true,

      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });
    const headerAp = document.querySelector('#custom-header-ov') as HTMLElement;
    locoScroll.on('scroll', (e) => {
      ScrollTrigger.update();

      if (headerAp) {
        if (e.direction === 'down') {
          headerAp.style.opacity = '0';
        } else {
          headerAp.style.opacity = '1';
        }
      }
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start]);
}
