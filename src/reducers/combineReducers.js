import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';
import fetches from './fetchesReducer';
import planFetched from './planReducer';
import goalsFetched from './goalReducer';

export default combineReducers({ fetches, user, ui, planFetched, goalsFetched });

