import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';
import Product from './Product';

import './Products.less';

export class Products extends Component {
  render() {
    const { isLoading, productList = [], products = [] } = this.props;
    return isLoading ? (
      <Loader />
    ) : !(productList.length || products.length) ? (
      <h4 className="text-center text-danger">No Products in the list</h4>
    ) : (
      <div className="d-md-flex align-items-center align-content-center flex-wrap Products">
        {(!!productList.length
          ? productList
          : !!products.length && products
        ).map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ product: { isLoading, productList } }) => ({
  isLoading,
  productList,
});

export default connect(mapStateToProps)(Products);
