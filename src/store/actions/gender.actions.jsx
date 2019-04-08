import actionTypes from '../action-types';

const { GENDER_SELECT, GENDER_RESET } = actionTypes;

const selectGender = gender => async dispatch => {
  dispatch({
    type: GENDER_SELECT,
    payload: {
      selectedGender: gender,
    },
  });
};

const resetGender = () => dispatch => {
  dispatch({
    type: GENDER_RESET,
    payload: {
      selectedGender: undefined
    }
  });
}

export { selectGender, resetGender };
