export default function hhmmssFormat(time) {
	let hours = '';

	hours = moment.duration(time).hours();
	if (hours < 10) hours = '0' + hours;

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
