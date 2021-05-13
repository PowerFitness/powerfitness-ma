import { combineReducers } from 'redux';
import user from './userReducer';
import ui from './uiReducer';
import fetches from './fetchesReducer';
import planFetched from './planReducer';
import goalsFetched from './goalReducer';
import resultsFetched from './resultsReducer';
import selectedDate from './selectedDateReducer';

const appReducer = combineReducers({ fetches, user, ui, planFetched, goalsFetched, resultsFetched, selectedDate });

export default (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}
