import actionTypes from '../action-types';
import ProductService from '../../services/products-service';
import GenderService from '../../services/gender-service';

const { SEARCH_START, SEARCH_SUCCESS, SEARCH_RESET } = actionTypes;

const _searchInProductList = async (gender, searchKey) => {
  const searchedProducts = searchKey
    ? await ProductService.searchByName(gender.id, searchKey)
    : [];
  let gendersAndProducts = [];

  if (searchedProducts.constructor !== Array) {
    await Promise.all(
      Object.keys(searchedProducts).map(async genderId => {
        const {
          text: genderLabel,
          name: genderName,
        } = await GenderService.getGenderForId(genderId);
        gendersAndProducts.push({
          type: 'gender',
          genderLabel,
        });
        searchedProducts[genderId].forEach(product => {
          gendersAndProducts.push({
            type: 'product',
            genderName,
            ...product,
          });
        });
      })
    );
  } else {
    gendersAndProducts = searchedProducts.map(product => ({
      type: 'product',
      genderName: gender.name,
      ...product,
    }));
  }

  return gendersAndProducts;
};

const searchProducts = (gender, searchKey) => async dispatch => {
  dispatch({
    type: SEARCH_START,
    payload: {
      isLoading: true,
      searchKey,
    },
  });

  const gendersAndProducts = await _searchInProductList(gender, searchKey);

  dispatch({
    type: SEARCH_SUCCESS,
    payload: {
      isLoading: false,
      searchKey,
      searchedProducts: gendersAndProducts,
    },
  });
};

const resetSearch = () => dispatch => {
  dispatch({
    type: SEARCH_RESET,
    payload: {
      isLoading: false,
      searchKey: '',
      searchedProducts: [],
    },
  });
};

export { searchProducts, resetSearch };
