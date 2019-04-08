import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from './global.reducer';
import gender from './gender.reducer';
import product from './product.reducer';
import search from './search.reducer';
import wishlist from './wishlist.reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    global,
    gender,
    product,
    search,
    wishlist,
  });
