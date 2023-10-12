import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { useEffect } from "react";
import { Loading } from 'components';
import { useLocation } from 'react-router-dom';

export const LoadingProvider = ({ children }: any) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const onHidePreLoading = () => {
      try {
        // const element = document.querySelector('#loading') as HTMLElement;
        // element.style.opacity = '1';
        // element.style.visibility = 'hidden';
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (err: any) {
        toast.error(err?.message || err);
      }
    };
    const timer1 = setTimeout(onHidePreLoading, 0);
    return () => {
      clearTimeout(timer1);
    };
  }, [location?.pathname]);
  console.log(location?.pathname);
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};
