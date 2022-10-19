import axios from 'axios';
const API_KEY = '76421f36bc1f2a2420e565e031c0566d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const media_type = 'movie';
const time_window = 'day';

// https://api.themoviedb.org/3/movie/550?api_key=76421f36bc1f2a2420e565e031c0566d

export const trendingToDay = async () => {
  const response = await axios.get(
    `trending/${media_type}/${time_window}?api_key=${API_KEY}`
  );
  return response.data;
  //   await axios
  //     .get(`trending/${media_type}/${time_window}?api_key=${API_KEY}`)
  //     .then(function (response) {
  //       console.log(response.data);
  //       return response.data;
  //     });
};
