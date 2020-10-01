import {TOGGLE_AUTH_PAGE} from './actionTypes';

export const togglePage = () => (dispatch) => {
  dispatch({
    type: TOGGLE_AUTH_PAGE,
  });
};
