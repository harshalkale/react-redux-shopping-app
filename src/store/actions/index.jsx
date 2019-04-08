import * as globalActions from './global.actions';
import * as genderActions from './gender.actions';
import * as productActions from './product.actions';
import * as searchActions from './search.actions';
import * as wishlistActions from './wishlist.actions';

export default {
  ...globalActions,
  ...genderActions,
  ...productActions,
  ...searchActions,
  ...wishlistActions,
};
