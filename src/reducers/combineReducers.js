import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';
import fetches from './fetchesReducer';
import planFetched from './planReducer';
import goalsFetched from './goalReducer';
import resultsFetched from './resultsReducer';
import selectedDate from './selectedDateReducer';

export default combineReducers({ fetches, user, ui, planFetched, goalsFetched, resultsFetched, selectedDate });

