import axios from 'axios';

const API_KEY = '76421f36bc1f2a2420e565e031c0566d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendingToDay = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};
export const movieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const searchMovies = async search => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export const searchCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const searchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
