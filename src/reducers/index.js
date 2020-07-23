import { combineReducers } from 'redux';
import services from './services';
import masters from './masters';
import modals from './modals';
import salons from './salons';
import salon from './salon';
import auth from './auth';

export default combineReducers({
  services,
  masters,
  modals,
  salons,
  salon,
  auth
});
