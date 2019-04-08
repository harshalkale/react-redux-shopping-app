import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationLayout from '../layouts/NavigationLayout';
import GenderSelection from '../components/GenderSelection';

import actions from '../store/actions';

export class Home extends Component {
  componentWillMount() {
    const {
      actions: { resetGender, resetProduct, resetSearch },
    } = this.props;

    resetSearch();
    resetGender();
    resetProduct();
  }

  render() {
    const { genders } = this.props;
    return (
      <NavigationLayout>
        <div className="container-fluid">
          <GenderSelection genders={genders} />
        </div>
      </NavigationLayout>
    );
  }
}

const mapStateToProps = ({ global: { genders } }) => ({
  genders,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
