import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { debounce } from 'lodash';

import SearchResults from './SearchResults';

import actions from '../store/actions';

import './SearchBar.less';

class SearchBar extends Component {
  state = {
    searchKey: '',
  };

  searchProduct = debounce(searchKey => {
    const {
      selectedGender = {},
      actions: { searchProducts, resetSearch },
    } = this.props;

    if (searchKey) {
      searchProducts(selectedGender, searchKey);
    } else {
      resetSearch();
    }
  }, 500);

  handleChange = value => {
    this.setState(prevState => ({
      ...prevState,
      searchKey: value,
    }));

    this.searchProduct(value);
  };

  render() {
    const { searchKey } = this.state;

    return (
      <form className="SearchBar">
        <input
          className="form-control SearchBar-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => this.handleChange(e.target.value)}
          value={searchKey}
        />
        <SearchResults />
      </form>
    );
  }
}

const mapStateToProps = ({
  gender: { selectedGender },
  search: { searchKey },
}) => ({
  selectedGender,
  searchKey,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
