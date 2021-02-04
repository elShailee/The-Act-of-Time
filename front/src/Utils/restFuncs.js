import axios from 'axios';

export async function fetchJSON(URL) {
  const response = await axios.get(URL).catch(err => {
    console.log(err);
    return {};
  });

  return response.data;
}
