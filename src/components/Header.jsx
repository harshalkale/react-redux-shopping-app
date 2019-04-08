import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import WishlistButton from './WishlistButton';

import './Header.less';

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light Header">
        <div className="w-100 d-flex flex-row justify-content-between">
          <Link className="navbar-brand" to="/">
            Shop
          </Link>
          <SearchBar />
          <WishlistButton />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ gender: { selectedGender } }) => ({
  selectedGender,
});

export default connect(mapStateToProps)(Header);
