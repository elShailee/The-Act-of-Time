import { useState, useEffect } from "react";
import moment from "moment";
import 'moment-duration-format';
export default function Countdown(startTime, endTime) {
  const [duration, setDuration] = useState(
    moment.duration((endTime - startTime))
  );
  const [zero,setZero] = useState(false);
  useEffect(() => {
    const interval = 1000;

    if (!zero && duration.asMilliseconds() <= 0) {
      setDuration(moment.duration(0));
      setZero(true);
    }

    const intervalDuration = setInterval(() => {
      setDuration(
        moment.duration(duration.asMilliseconds() - interval)
      );
    }, interval);

    return () => {
      clearInterval(intervalDuration);
    };
  }, [duration]);

  return moment.duration(duration.asMilliseconds(),"milliseconds").format("hh:mm:ss",{trim:false});
}
