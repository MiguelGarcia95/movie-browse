import {FETCH_POPULAR_MOVIES, FETCH_POPULAR_SHOWS} from '../../actions/types';

const initialState = {
  popularMovies: [],
  popularShows: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      }
      break;
    case FETCH_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: action.payload
      }
    default:
      return state
  }
}
