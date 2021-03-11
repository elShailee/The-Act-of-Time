import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';
import dhFormat from './dhFormat.js';

/*
useCountdown hook is used for performing countdown timer.
The hook gets endTime as unix time (you can use moment object).
The hook returns countdown as format hh:mm:ss.
*/
function useCountdown(endTime) {
	const [duration, setDuration] = useState(moment.duration(moment(endTime).diff(moment())));
	const [hasReachedZero, setHasReachedZero] = useState(false);
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

	return dhFormat(duration.asMilliseconds());
}

export { useCountdown };
