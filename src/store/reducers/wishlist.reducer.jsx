import actionTypes from '../action-types';

const { WISHLIST_ADD, WISHLIST_REMOVE } = actionTypes;

const INITIAL_STATE = {
  items: [],
};

const wishlist = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case WISHLIST_ADD:
    case WISHLIST_REMOVE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default wishlist;
