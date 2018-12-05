import {FETCH_SHOW_GENRES, FETCH_MOVIE_GENRES} from './types';
import axios from 'axios';

export const fetchMovieGenres = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US');
  dispatch({
    type: FETCH_MOVIE_GENRES,
    payload: res.data.genres
  });
}

export const fetchShowGenres = () => async dispatch => {
  const res = await axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US');
  dispatch({
    type: FETCH_SHOW_GENRES,
    payload: res.data.genres
  });
}
