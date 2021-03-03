import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-duration-format';
import hhmmssFormat from './hhmmssFormat';
function useCountdown(startTime, endTime) {
	/*TODO remove startTime, put only endTime.
         change calculation by endTime - Now.
	 */
	const [duration, setDuration] = useState(moment.duration(endTime - startTime));
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

	return hhmmssFormat(duration.asMilliseconds());
}

export { useCountdown };
