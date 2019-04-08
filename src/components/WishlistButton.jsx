import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './WishlistButton.less';

export class WishlistButton extends Component {
  render() {
    const { wishlistedItems } = this.props;

    return (
      <Link className="nav-link WishlistButton" to="/wishlist">
        <i className="fa fa-heart WishlistButton-icon" />
        {!!wishlistedItems.length && (
          <span className="badge badge-pill badge-danger WishlistButton-badge">
            {wishlistedItems.length}
          </span>
        )}
      </Link>
    );
  }
}

const mapStateToProps = ({ wishlist: { items: wishlistedItems } }) => ({
  wishlistedItems,
});

export default connect(mapStateToProps)(WishlistButton);
