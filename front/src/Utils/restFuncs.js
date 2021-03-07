import axios from 'axios';

export async function fetchJSON(URL) {
	try {
		let res = await axios(URL);
		return res.data;
	} catch (error) {
		console.log(error);

		return {};
	}
}
