import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/wishlist',
    component: Wishlist,
    exact: true,
  },
  {
    path: '/:genderName',
    component: ProductList,
    exact: true,
  },
  {
    path: '/:genderName/:slug',
    component: ProductDetails,
    exact: true,
  },
];
