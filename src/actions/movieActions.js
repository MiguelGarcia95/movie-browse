import {
  FETCH_POPULAR_MOVIES, FETCH_POPULAR_SHOWS, FETCH_TOP_RATED_MOVIES, FETCH_TOP_RATED_SHOWS,
  FETCH_UPCOMING_MOVIES, FETCH_PLAYING_NOW_MOVIES
} from './types';
import axios from 'axios';

export const fetchPopularMovies = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_POPULAR_MOVIES,
    payload: res.data.results
  });
}

export const fetchPopularShows = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_POPULAR_SHOWS,
    payload: res.data.results
  });
}

export const fetchTopRatedMovies = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: res.data.results
  })
}

export const fetchTopRatedShows = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_TOP_RATED_SHOWS,
    payload: res.data.results
  })
}

export const fetchUpcomingMovies = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: res.data.results
  })
}

export const fetchPlayingNowMovies = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&page=1');
  dispatch({
    type: FETCH_PLAYING_NOW_MOVIES,
    payload: res.data.results
  });
}
