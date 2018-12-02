import {FETCH_POPULAR_MOVIES, FETCH_POPULAR_SHOWS} from '../types';
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
