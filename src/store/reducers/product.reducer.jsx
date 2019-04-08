import actionTypes from '../action-types';

const {
  PRODUCT_DETAILS_LOAD_START,
  PRODUCT_DETAILS_LOAD_SUCCESS,
  PRODUCT_LIST_LOAD_START,
  PRODUCT_LIST_LOAD_SUCCESS,
  PRODUCT_RESET,
} = actionTypes;

const product = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_LOAD_START:
    case PRODUCT_LIST_LOAD_SUCCESS:
    case PRODUCT_DETAILS_LOAD_START:
    case PRODUCT_DETAILS_LOAD_SUCCESS:
    case PRODUCT_RESET:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default product;
