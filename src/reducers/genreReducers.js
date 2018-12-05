import {FETCH_SHOW_GENRES, FETCH_MOVIE_GENRES} from '../actions/types';

const initialState = {
  showGenres: [],
  movieGenres: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW_GENRES:
      return {
        ...state,
        showGenres: action.payload
      }
      break;
    case FETCH_MOVIE_GENRES:
      return {
        ...state,
        movieGenres: action.payload
      }
    default:
      return state
  }
}
