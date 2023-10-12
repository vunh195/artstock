import React, { useEffect } from 'react';

/**
 * @author
 * @function
 **/
interface IPropTimer {
  timeClose: any;
  onSetTimerDays: (days: string) => void;
  onSetTimerHours: (days: string) => void;
  onSetTimerMinutes: (days: string) => void;
  onSetTimerSeconds: (days: string) => void;
  onSetIsEnd: (isTrue: boolean) => void;
}

export const CountDownTimer = ({
  onSetTimerDays,
  timeClose,
  onSetTimerHours,
  onSetTimerMinutes,
  onSetTimerSeconds,
  onSetIsEnd,
}: IPropTimer) => {
  let interval: any = React.useRef();

  useEffect(() => {
    if (timeClose !== '') {
      const interval_id = setInterval(function () {}, Number.MAX_SAFE_INTEGER);
      for (let i: any = 1; i < interval_id; i++) {
        clearInterval(i);
      }
    }
  }, [timeClose]);
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date(new Date().toUTCString()).getTime();
      const distanceTime = timeClose - now;
      if (!isNaN(distanceTime)) {
        const days: any = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
        const hours: any = Math.floor(
          (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes: any = Math.floor(
          (distanceTime % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds: any = Math.floor((distanceTime % (1000 * 60)) / 1000);
        if (distanceTime < 0) {
          onSetTimerDays('0');
          onSetTimerHours('0');
          onSetTimerMinutes('0');
          onSetTimerSeconds('0');
          clearInterval(interval.current);
          onSetIsEnd(true);
        } else {
          onSetIsEnd(false);
          days < 10
            ? onSetTimerDays('0' + days.toString())
            : onSetTimerDays(days);
          hours < 10
            ? onSetTimerHours('0' + hours.toString())
            : onSetTimerHours(hours);
          minutes < 10
            ? onSetTimerMinutes('0' + minutes.toString())
            : onSetTimerMinutes(minutes);
          seconds < 10
            ? onSetTimerSeconds('0' + seconds.toString())
            : onSetTimerSeconds(seconds);
        }
      }
    }, 1000);
  };
  React.useEffect(() => {
    if (timeClose !== '') startTimer();
    return () => {
      if (timeClose !== '') clearInterval(interval.current);
    };
  });
  return <></>;
};
export default CountDownTimer;
