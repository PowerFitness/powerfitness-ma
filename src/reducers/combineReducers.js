import { combineReducers } from 'redux';
import user from './userReducer';
import planFetched from './planReducer';
import goalsFetched from './goalReducer';

export default combineReducers({ user, planFetched, goalsFetched  });
