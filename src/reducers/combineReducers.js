import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';
import fetches from './fetchesReducer';
import plan from './planReducer';

export default combineReducers({ fetches, user, ui, plan });
