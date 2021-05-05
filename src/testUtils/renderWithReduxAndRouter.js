import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/combineReducers';

export const renderWithReduxAndRouter = (
    ui,
    {
        initialState,
        route = '/',
        store = createStore(rootReducer, initialState),
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

