import {FETCH_MOVIE_TRAILER} from '../actions/types';

const initialState = {
  topMovieTrailers: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_TRAILER:
      return {
        ...state,
        topMovieTrailers: action.payload
      }
      break;
    default:
      return state;
  }
}
