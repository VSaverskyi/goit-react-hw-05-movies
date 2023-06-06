import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'd5b6a5ca94641e9f7b547d0396725c93';

const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response;
};

const fetchSearchMovies = async (searchValue, page) => {
  const response = await axios.get(
    `/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
  );
  return response;
};

const fetchFilmDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response;
};

const fetchFilmCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response;
};

const fetchFilmReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
};

const api = {
  fetchTrending,
  fetchSearchMovies,
  fetchFilmDetails,
  fetchFilmCredits,
  fetchFilmReviews,
};

export default api;
