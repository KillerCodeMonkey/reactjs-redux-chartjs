import React, { PropTypes } from 'react';

import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import './App.css';
import Home from './Home';
import About from './About';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about/(:aParam)" component={About} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
