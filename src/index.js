import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/App';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer, {
  costs: [15000, 15000, 15000],
  incomes: [22000, 13000, 18000],
  savings: [20000, 11000, 15000]
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
