import actionTypes from '../action-types';

const {
  GENDER_SELECT,
  GENDER_RESET,
} = actionTypes;

const INITIAL_STATE = {};

const cart = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GENDER_SELECT:
    case GENDER_RESET:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default cart;
