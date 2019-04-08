import actionTypes from '../action-types';

const { APP_INIT_START, APP_INIT_SUCCESS } = actionTypes;

const INITIAL_STATE = {
  isLoading: false,
};

const global = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case APP_INIT_START:
    case APP_INIT_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default global;
