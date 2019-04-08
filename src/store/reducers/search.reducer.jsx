import actionTypes from '../action-types';

const { SEARCH_START, SEARCH_SUCCESS, SEARCH_RESET } = actionTypes;

const INITIAL_STATE = {
  isLoading: false,
  searchKey: '',
  searchedProducts: [],
};

const search = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH_START:
    case SEARCH_SUCCESS:
    case SEARCH_RESET:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default search;
