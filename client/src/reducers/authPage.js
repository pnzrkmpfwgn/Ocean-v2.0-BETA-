import {TOGGLE_AUTH_PAGE} from '../actions/actionTypes';

const initialState = {
  isLogin: false,
};

export default function (state = initialState, action) {
  const {type} = action;

  switch (type) {
    case TOGGLE_AUTH_PAGE:
      return {...state, isLogin: !state.isLogin};
    default:
      return state;
  }
}
