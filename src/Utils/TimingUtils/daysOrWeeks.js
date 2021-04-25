export default function daysOrWeeks(num) {
	let result = '';
	num < 7 ? (result = num + ' days') : num > 13 ? (result = Math.round(num / 7) + ' weeks') : (result = '1 week');
	return result;
}
