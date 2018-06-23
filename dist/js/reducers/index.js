import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {contactLists} from './counterReducer';

export default combineReducers({
  routing: routerReducer,
  contactLists
});
