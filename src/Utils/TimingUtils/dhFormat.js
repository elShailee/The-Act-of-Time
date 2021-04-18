import moment from 'moment';
import hhmmssFormat from './hhmmssFormat';
/*
The function gets time as unix time.
The function returns time as format - xd yh (x represents the days, y represnts hours).
*/

export default function dhFormat(time) {
	if (moment.duration(time).days() === 0) {
		return hhmmssFormat(time);
	}

	let days = moment.duration(time).days();
	let hours = moment.duration(time).hours();
	let timeFormat = days + 'd ' + hours + 'h';
	return timeFormat;
}
