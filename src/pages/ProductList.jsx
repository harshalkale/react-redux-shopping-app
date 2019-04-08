import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationLayout from '../layouts/NavigationLayout';
import Products from '../components/Products';

import actions from '../store/actions';

class ProductList extends Component {
  componentWillMount() {
    const {
      actions: { loadProductList, resetSearch },
    } = this.props;

    resetSearch();
    loadProductList();
  }

  render() {
    return (
      <NavigationLayout>
        <div className="container-fluid">
          <Products />
        </div>
      </NavigationLayout>
    );
  }
}

const mapStateToProps = ({ product: { productList } }) => ({
  productList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
