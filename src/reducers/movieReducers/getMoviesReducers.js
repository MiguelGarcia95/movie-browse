import {GET_MOVIES} from '../../actions/types';

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        value: action.payload
      }
      break;
    default:
      return state;
  }
}
