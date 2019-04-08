import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import actions from '../store/actions';

import Loader from './Loader';

import './Brief.less';
import { bindActionCreators } from 'redux';

export class Brief extends Component {
  addItemToWishlist = () => {
    const {
      actions: { addItemToWishlist },
      productDetails,
    } = this.props;

    addItemToWishlist(productDetails);
  };

  isAddedToWislist = slug => {
    const { wishlistedItems } = this.props;

    return !!wishlistedItems.find(item => item.slug === slug);
  };

  render() {
    const {
      isLoading,
      productDetails: {
        images: { full } = {},
        brand,
        name,
        description,
        slug,
      } = {},
    } = this.props;

    return (
      <div className="Brief">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="d-flex flex-row">
            <img src={full} alt={slug} className="mr-4" />
            <div className="flex-grow-1">
              <h1>{brand}</h1>
              <h3>{name}</h3>
              <hr />
              <p>{description}</p>

              <button
                className={classNames(['btn', 'btn-lg', 'btn-primary'])}
                disabled={this.isAddedToWislist(slug)}
                onClick={() => this.addItemToWishlist()}>
                <i className="fa fa-heart" />
                Add to Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  product: { isLoading, productDetails },
  wishlist: { items: wishlistedItems },
}) => ({
  isLoading,
  productDetails,
  wishlistedItems,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brief);
