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
  console.log();
  return response.data;
};
export const movieDetails = async movieId => {
  console.log(movieId);
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
};
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const searchMovies = async query => {
  console.log(query);
  const response = await axios.get(
    `search/movie/?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  console.log(response.data);
  return response.data;
};
