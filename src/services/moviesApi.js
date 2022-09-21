import axios from 'axios';
import defaultImage from '../images/defaultImage.jpg';
import noImageAvailable from '../images/noImageAvailable.jpg';

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY_API = '0a44406a328e0c9276ca96d909ee6267';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function getMoviesByTrend(config) {
  const url = `${BASE_URL}/trending/movie/week?api_key=${KEY_API}&language=ru-US`;
  const { data } = await axios.get(url, config);

  if (!data.results.length) {
    return Promise.reject(
      new Error('Sorry, the service is temporarily unavailable.')
    );
  }
  return normalizedImgUrl(data.results);
}

async function getMoviesByQuery(query, config) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY_API}&query=${query}&language=ru-US`;
  const { data } = await axios.get(url, config);

  if (!data.results.length) {
    return Promise.reject(
      new Error(`Sorry, no results were found for ${query}.`)
    );
  }

  return normalizedImgUrl(data.results);
}

async function getMovieById(id, config) {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY_API}&language=ru-US`;
  const { data } = await axios.get(url, config);

  if (!data) {
    return Promise.reject(
      new Error('Sorry, the service is temporarily unavailable.')
    );
  }

  return normalizedMovie(data);
}

async function getMovieCast(id, config) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}&language=ru-US`;
  const { data } = await axios.get(url, config);

  if (!data.cast.length) {
    return Promise.reject(new Error('We don`t have any cast for this movie.'));
  }
  return normalizedCast(data.cast);
}

async function getMovieReviews(id, config) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}&language=ru-US`;
  const { data } = await axios.get(url, config);

  if (!data.results.length) {
    return Promise.reject(
      new Error('We don`t have any reviews for this movie.')
    );
  }
  return data.results;
}

function normalizedImgUrl(movies) {
  return movies.map(movie => ({
    ...movie,
    poster_path: checkPosterPath(movie.poster_path),
  }));
}

function normalizedMovie(movie) {
  const genres = movie.genres.map(genre => genre.name).join(' ');

  return {
    title: movie.original_title,
    overview: movie.overview,
    userScore: `${movie.vote_average * 10}%`,
    genres,
    src: checkPosterPath(movie.poster_path),
  };
}

function normalizedCast(cast) {
  return cast.map(item => ({
    id: item.cast_id,
    name: item.name,
    src: item.profile_path ? `${IMG_URL}${item.profile_path}` : defaultImage,
    character: item.character,
  }));
}

function checkPosterPath(path) {
  return path ? `${IMG_URL}${path}` : noImageAvailable;
}

const api = {
  getMoviesByTrend,
  getMoviesByQuery,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};

export default api;
