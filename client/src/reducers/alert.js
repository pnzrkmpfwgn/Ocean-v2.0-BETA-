import {SET_ALERT, REMOVE_ALERT} from '../actions/actionTypes';

const initialState = [];

export default function (state = initialState, aciton) {
  const {type, payload} = aciton;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
}
