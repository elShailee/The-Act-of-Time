import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';

function useCountdown(startTime, endTime) {
  const [duration, setDuration] = useState(
    moment.duration(endTime - startTime)
  );
  const [hasReachedZero , setHasReachedZero ] = useState(false);
  useEffect(() => {
    const interval = 1000;

    let intervalDuration;
    if (!hasReachedZero) {
      intervalDuration = setInterval(() => {
        setDuration(moment.duration(duration.asMilliseconds() - interval));
      }, interval);
    }

    if (!hasReachedZero && duration.asMilliseconds() <= 0) {
      setDuration(moment.duration(0));
      setHasReachedZero(true);
      clearInterval(intervalDuration);
    }
    return () => {
      clearInterval(intervalDuration);
    };
  }, [duration, hasReachedZero]);

  return duration.asMilliseconds();
}

function formmatCountdown(countdown){
  let hours = "";
    if (hours) {
      hours = moment.duration(countdown).hours();
      if (hours < 10) hours = "0" + hours;
    }
    let minutes = moment.duration(countdown).minutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = moment.duration(countdown).seconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let countdownFrmt = hours !== "" ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds;
    
    return countdownFrmt;
}
export {useCountdown,formmatCountdown};