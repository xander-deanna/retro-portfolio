import React from "react";

export default function TaskbarClock() {
  const refClock = React.useRef(undefined);
  const refTimer = React.useRef(0);

  const clock = () => {
    const date = new Date();
    const hour = date.getHours();
    const notMilitary = (m) => {
      if (m > 12) {
        return `${m - 12}`;
      } else if (m === 12) {
        return m;
      } else {
        return m;
      }
    };
    const formattedHour = `${notMilitary(hour)}`;
    const min = date.getMinutes();
    const interval = (60 - date.getSeconds()) * 1000 + 5;
    const addZero = (t) => {
      if (t < 10) return `0${t}`;
      return t;
    };

    refTimer.current = window.setTimeout(() => {
      clock();
    }, interval);

    const AMorPM = (x) => {
      if (hour > 12) {
        x = 'PM';
      } else {
        x = 'AM';
      }
      return x;
    };

    refClock.current.innerHTML = `${addZero(formattedHour)}:${addZero(
      min
    )} ${AMorPM()}`;
  };

  React.useEffect(() => {
    refClock && refClock.current && clock();
    return () => {
      window.clearTimeout(refTimer.current);
      refClock.current = null;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p ref={refClock} className="taskbarClock"></p>;
}