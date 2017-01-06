import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import Root from './components/Root';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer, {
  costs: [15000, 15000, 15000],
  incomes: [22000, 13000, 18000],
  savings: [20000, 11000, 15000]
});

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
