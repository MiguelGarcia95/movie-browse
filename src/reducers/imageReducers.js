import {FETCH_MOVIE_BACKGROUND_IMAGES} from '../actions/types'

const initialState = {
  backgroundImages: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_BACKGROUND_IMAGES:
      return {
        ...state,
        backgroundImages: action.payload
      }
      break;
    default:
      return state
  }
}
