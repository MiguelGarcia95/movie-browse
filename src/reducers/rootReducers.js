import {combineReducers} from 'redux';
import movieReducers from './movieReducers/movieReducers';

export default combineReducers({
  movies: movieReducers
});
