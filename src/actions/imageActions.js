import {FETCH_MOVIE_BACKGROUND_IMAGES} from './types';
import axios from 'axios';

export const fetchMovieBackgroundImages = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=9aaea37e833c9bd0cee81fa22d51a538&language=en-US&include_image_language=null`);
  dispatch({
    type: FETCH_MOVIE_BACKGROUND_IMAGES,
    payload: res.data.backdrops
  });
}
