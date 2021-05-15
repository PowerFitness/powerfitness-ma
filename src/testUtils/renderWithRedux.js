import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from '../reducers/combineReducers';
import thunk from 'redux-thunk';

export const renderWithRedux = (
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default renderWithRedux;
