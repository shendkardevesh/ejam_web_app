import { combineReducers } from 'redux'
import weatherReport from './weatherReport';
import cities from './cities';

export default combineReducers({
  weatherReport,
  cities
});
