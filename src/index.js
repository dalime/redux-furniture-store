import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout'
import Home from './components/Home';
import FighterPage from './components/FighterPage';

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}/>
        <Route path='/fighters' component={FighterPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
