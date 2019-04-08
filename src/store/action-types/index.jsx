import * as globalActionTypes from './global.action-types';
import * as genderActionTypes from './gender.action-types';
import * as productActionTypes from './product.action-types';
import * as searchActionTypes from './search.action-types';
import * as wishlistActionTypes from './wishlist.action-types';

export default {
  ...globalActionTypes,
  ...genderActionTypes,
  ...productActionTypes,
  ...searchActionTypes,
  ...wishlistActionTypes,
}