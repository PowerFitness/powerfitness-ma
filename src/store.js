import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/combineReducers";
import thunk from 'redux-thunk';

const enhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancer);

export default store;
