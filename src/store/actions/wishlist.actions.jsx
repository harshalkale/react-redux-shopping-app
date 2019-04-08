import actionTypes from '../action-types';

const { WISHLIST_ADD, WISHLIST_REMOVE } = actionTypes;

const addItemToWishlist = product => (dispatch, getState) => {
  const {
    wishlist: { items: currentWishlistItems },
  } = getState();

  dispatch({
    type: WISHLIST_ADD,
    payload: {
      items: [...currentWishlistItems, product],
    },
  });
};

const removeItemFromWishlist = slug => (dispatch, getState) => {
  const {
    wishlist: { items: currentWishlistItems },
  } = getState();

  const newWishlistItems = currentWishlistItems.filter(
    item => slug !== item.slug
  );

  dispatch({
    type: WISHLIST_REMOVE,
    payload: {
      items: newWishlistItems,
    },
  });
};

export { addItemToWishlist, removeItemFromWishlist };
