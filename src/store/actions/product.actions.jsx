import actionTypes from '../action-types';
import GenderService from '../../services/gender-service';
import ProductService from '../../services/products-service';

import { selectGender } from './gender.actions';

const {
  PRODUCT_LIST_LOAD_START,
  PRODUCT_LIST_LOAD_SUCCESS,
  PRODUCT_DETAILS_LOAD_START,
  PRODUCT_DETAILS_LOAD_SUCCESS,
  PRODUCT_RESET,
} = actionTypes;

const loadProductList = () => async (dispatch, getState) => {
  const {
    router: {
      location: { pathname },
    },
  } = getState();
  const genderName = pathname.split('/')[1];
  const currentGender = await GenderService.getGenderForName(genderName);
  if (currentGender) {
    dispatch(selectGender(currentGender));
    dispatch({
      type: PRODUCT_LIST_LOAD_START,
      payload: {
        isLoading: true,
      },
    });
    const productList = await ProductService.getAllProducts(currentGender.id);
    dispatch({
      type: PRODUCT_LIST_LOAD_SUCCESS,
      payload: {
        isLoading: false,
        productList,
        // remove product from state
        productDetails: undefined,
      },
    });
  }
};

const loadProductDetails = (genderName, slug) => async (dispatch, getState) => {
  if (!genderName && !slug) {
    const {
      router: {
        location: { pathname },
      },
    } = getState();
    [, genderName, slug] = pathname.split('/');
  }
  const currentGender = await GenderService.getGenderForName(genderName);
  if (currentGender) {
    dispatch(selectGender(currentGender));
    dispatch({
      type: PRODUCT_DETAILS_LOAD_START,
      payload: {
        isLoading: true,
      },
    });
    const productDetails = await ProductService.getProductBySlug(
      currentGender.id,
      slug
    );
    dispatch({
      type: PRODUCT_DETAILS_LOAD_SUCCESS,
      payload: {
        isLoading: false,
        productDetails,
      },
    });
  }
};

const resetProduct = () => dispatch => {
  dispatch({
    type: PRODUCT_RESET,
    payload: {
      productList: [],
      productDetails: undefined,
    },
  });
};

export { loadProductList, loadProductDetails, resetProduct };
