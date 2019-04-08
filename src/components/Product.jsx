import React from 'react';
import { Link } from 'react-router-dom';

import './Product.less';

const Product = ({ slug, genderName, brand, name, images: { thumb } = {} }) => (
  <Link
    to={`/${genderName}/${slug}`}
    className="d-flex flex-column align-items-center align-content-center Product">
    <img src={thumb} alt={`${brand} ${name}`} className="Product-thumb" />
    <span className="Product-brand">{brand}</span>
    <span className="Product-name">{name}</span>
  </Link>
);

export default Product;
