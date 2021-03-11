import moment from 'moment';
/*
The function gets time as unix time.
The function returns time as format - hh:mm:ss.
If the hours is 0 then the return formant is mm:ss.
*/

export default function hhmmssFormat(time) {
	let hours = '';

	if (moment.duration(time).hours() !== 0) {
		hours = moment.duration(time).hours();
	}

	let minutes = moment.duration(time).minutes();
	let seconds = moment.duration(time).seconds();
	const unsureDoubleDigits = num => {
		return num < 10 ? '0' + num : num;
	};
	minutes = unsureDoubleDigits(minutes);
	seconds = unsureDoubleDigits(seconds);

	let timeFormat = hours !== '' ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds;

	return timeFormat;
}
