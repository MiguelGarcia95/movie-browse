import {GET_MOVIES} from '../types';

export const getMovies = e => dispatch => {
  dispatch({
    type: GET_MOVIES,
    payload: e.target.value
  });
};
