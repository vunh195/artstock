import { useCallback, useEffect, useRef, useState } from 'react';

export const onMoveAnimation = (ele: string, animation: string) => {
  const root = document.querySelector(`#${ele}`) as HTMLElement;
  if (root) {
    root.style.animation = `${animation} .3s`;
    root.style.animationFillMode = 'forwards';
  }
};

export function doScrolling(elementY: any, duration: any) {
  let startingY = window.pageYOffset;
  let diff = elementY - startingY;
  let start: any;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;

    let time = timestamp - start;

    let percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
export function useStateCallback<T>(
  initialState: T,
): [T, (state: T, cb?: (state: T) => void) => void] {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<((state: T) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
