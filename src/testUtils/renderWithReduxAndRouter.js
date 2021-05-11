import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from '../reducers/combineReducers';
import thunk from 'redux-thunk';

export const renderWithReduxAndRouter = (
    ui,
    {
        initialState,
        route = '/',
        store = createStore(rootReducer, initialState, applyMiddleware(thunk)
        ),
        ...renderOptions
    } = {}
) => {
    window.history.pushState({}, 'Test page', route)

    function Wrapper({ children }) {
        return <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default renderWithReduxAndRouter;

