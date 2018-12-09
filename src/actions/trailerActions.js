import {FETCH_MOVIE_TRAILER} from './types';
import axios from 'axios';

export const fetchMovieTrailer = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US`);
  dispatch({
    type: FETCH_MOVIE_TRAILER,
    payload: res.data.results
  });
}
