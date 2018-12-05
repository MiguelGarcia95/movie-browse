import {
  FETCH_POPULAR_MOVIES, FETCH_POPULAR_SHOWS, FETCH_TOP_RATED_MOVIES, FETCH_TOP_RATED_SHOWS, FETCH_UPCOMING_MOVIES,
  FETCH_PLAYING_NOW_MOVIES
} from '../actions/types';

const initialState = {
  popularMovies: [],
  popularShows: [],
  topRatedMovies: [],
  topRatedShows: [],
  upcomingMovies: [],
  playingNowMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      }
    case FETCH_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: action.payload
      }
    case FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload
      }
    case FETCH_TOP_RATED_SHOWS:
      return {
        ...state,
        topRatedShows: action.payload
      }
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload
      }
    case FETCH_PLAYING_NOW_MOVIES:
      return {
        ...state,
        playingNowMovies: action.payload
      }
    default:
      return state
  }
}
