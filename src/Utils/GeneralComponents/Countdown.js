import { useState, useEffect } from "react";
import moment from "moment";
import "moment-duration-format";
export default function Countdown(startTime, endTime) {
  const [duration, setDuration] = useState(
    moment.duration(endTime - startTime)
  );
  const [zero, setZero] = useState(false);
  useEffect(() => {
    const interval = 1000;

    let intervalDuration;
    if (!zero) {
      intervalDuration = setInterval(() => {
        setDuration(moment.duration(duration.asMilliseconds() - interval));
      }, interval);
    }

    if (!zero && duration.asMilliseconds() <= 0) {
      setDuration(moment.duration(0));
      setZero(true);
      clearInterval(intervalDuration);
    }
    return () => {
      clearInterval(intervalDuration);
    };
  }, [duration, zero]);

  return moment
    .duration(duration.asMilliseconds(), "milliseconds")
    .format("hh:mm:ss");
}
