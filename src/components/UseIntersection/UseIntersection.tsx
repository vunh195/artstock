import React from 'react';
const UseIntersection = (
  element,
  rootMargin,
  setCount = (val) => {},
  therehold = 0.5,
) => {
  const [isVisible, setState] = React.useState<any>(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
        if (entry.isIntersecting) {
          setCount(true);
        }
      },
      { rootMargin, threshold: therehold },
    );

    element.current && observer?.observe(element.current);

    return () => element.current && observer?.unobserve(element.current);
  }, []);
  // console.log(count);
  return isVisible;
};

export default UseIntersection;
