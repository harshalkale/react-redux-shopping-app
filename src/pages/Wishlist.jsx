import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationLayout from '../layouts/NavigationLayout';
import Products from '../components/Products';

import actions from '../store/actions';

export class Wishlist extends Component {
  componentWillMount() {
    const {
      actions: { resetProduct, resetSearch },
    } = this.props;

    resetSearch();
    resetProduct();
  }

  render() {
    const { wishlistedItems } = this.props;
    return (
      <NavigationLayout showBreadcrumbs={false}>
        <div className="mt-4 container-fluid">
          <Products products={wishlistedItems} />
        </div>
      </NavigationLayout>
    );
  }
}

const mapStateToProps = ({ wishlist: { items: wishlistedItems } }) => ({
  wishlistedItems
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
