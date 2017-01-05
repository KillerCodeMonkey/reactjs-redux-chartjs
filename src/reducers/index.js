import { combineReducers } from 'redux';
import incomes from './incomes';
import costs from './costs';
import savings from './savings';

const dashboardApp = combineReducers({
  incomes,
  costs,
  savings
});

export default dashboardApp;