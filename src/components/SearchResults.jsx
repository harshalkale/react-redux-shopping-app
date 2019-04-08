import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import actions from '../store/actions';

import './SearchResults.less';

export class SearchResults extends Component {
  render() {
    const {
      searchedProducts,
      actions: { resetSearch, resetProduct, loadProductDetails },
    } = this.props;

    return (
      <ul
        className={classNames([
          'SearchResults',
          { 'is-open': searchedProducts.length },
        ])}>
        {searchedProducts.map(
          ({ type, genderName, genderLabel, id, brand, name, slug }, index) => (
            <li
              key={index}
              className={classNames(['SearchResults-result', type])}>
              {type === 'gender' && (
                <span>
                  <b>{genderLabel}</b>
                </span>
              )}
              {type === 'product' && (
                <Link
                  to={`/${genderName}/${slug}`}
                  onClick={() => {
                    resetSearch();
                    resetProduct();
                    loadProductDetails(genderName, slug);
                  }}>
                  <b>{brand}</b>
                  {` ${name}`}
                </Link>
              )}
            </li>
          )
        )}
      </ul>
    );
  }
}

const mapStateToProps = ({ search: { searchedProducts } }) => ({
  searchedProducts,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
