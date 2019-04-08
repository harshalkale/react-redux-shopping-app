import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationLayout from '../layouts/NavigationLayout';
import Brief from '../components/Brief';

import actions from '../store/actions';

export class ProductDetails extends Component {
  componentDidMount() {
    const {
      actions: { loadProductDetails, resetSearch },
    } = this.props;

    resetSearch();
    loadProductDetails();
  }

  render() {
    const { productDetails } = this.props;

    return (
      <NavigationLayout>
        <div className="container">
          <Brief product={productDetails} />
        </div>
      </NavigationLayout>
    );
  }
}

const mapStateToProps = ({
  gender: { selectedGender },
  product: { productDetails },
}) => ({
  selectedGender,
  productDetails,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
