import actionTypes from '../action-types';
import GenderService from '../../services/gender-service';

const { APP_INIT_START, APP_INIT_SUCCESS } = actionTypes;

const initApp = () => async dispatch => {
  dispatch({
    type: APP_INIT_START,
    payload: {
      isLoading: true,
    },
  });
  const genders = await GenderService.getGenders();
  dispatch({
    type: APP_INIT_SUCCESS,
    payload: {
      isLoading: false,
      genders,
    },
  });
};

export { initApp };
