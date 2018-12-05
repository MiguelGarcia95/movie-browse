import {combineReducers} from 'redux';
import movieReducers from './movieReducers';
import genreReducers from './genreReducers';
import trailerReducers from './trailerReducers';

export default combineReducers({
  movies: movieReducers,
  genres: genreReducers,
  trailers: trailerReducers
});
