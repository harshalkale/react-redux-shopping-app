import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';
import actions from './store/actions';
import routes from './routes';

import Loader from './components/Loader';

import './App.less';

class App extends Component {
  componentWillMount() {
    const {
      actions: { initApp },
    } = this.props;

    initApp();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <ConnectedRouter history={history}>
        {isLoading ? (
          <Loader />
        ) : (
          <Switch>
            {routes.map((routeProps, index) => (
              <Route key={index} {...routeProps} />
            ))}
          </Switch>
        )}
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = ({ global: { isLoading } }) => ({ isLoading });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
