import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import genreReducers from './genreReducers';
import trailerReducers from './trailerReducers';
import imageReducers from './imageReducers';

export default combineReducers({
  movies: movieReducers,
  genres: genreReducers,
  trailers: trailerReducers,
  images: imageReducers
});
