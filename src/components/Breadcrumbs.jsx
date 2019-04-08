import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './Breadcrumbs.less';

class Breadcrumbs extends Component {
  render() {
    const {
      selectedGender: { name: genderName, text: genderLabel } = {},
      productDetails: { slug, brand, name } = {},
    } = this.props;

    return genderName || slug ? (
      <div className="Breadcrumbs">
        <nav className="nav">
          {genderName && (
            <Link
              className={classnames(['nav-link'], {
                disabled: !slug,
              })}
              to={`/${genderName}`}>
              {genderLabel}
            </Link>
          )}
          {slug && (
            <>
              <div className="nav-link disabled text-small text-secondary">></div>
              <Link
                className="nav-link disabled"
                to={`/${genderName}/${slug}`}>
                {[brand, name].join(' ')}
              </Link>
            </>
          )}
        </nav>
      </div>
    ) : null;
  }
}

const mapStateToProps = ({
  gender: { selectedGender },
  product: { productDetails },
}) => ({
  selectedGender,
  productDetails,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);
