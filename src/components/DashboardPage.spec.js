import React from 'react';
import DashboardPage from './DashboardPage';
import { screen, fireEvent } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import renderWithRedux from '../testUtils/renderWithRedux';

describe('DashboardPage', () => {
    test('Rendering DashboardPage for User', () => {
        renderWithReduxAndRouter(<DashboardPage />, {
            initialState: {}, route: '/dashboard'
        })
        expect(screen.getByText('Add Journal Entry')).toBeInTheDocument()
        expect(screen.getByText('My Motivation')).toBeInTheDocument()
        expect(screen.getByTestId('DatePicker')).toBeInTheDocument()
        expect(screen.getByText('Calories')).toBeInTheDocument()
        expect(screen.getByText('Exercise')).toBeInTheDocument()
        expect(screen.getByText('Water')).toBeInTheDocument()
    })
    test('DashboardPage navigates to journal page', () => {
        const history = createBrowserHistory();
        history.push = jest.fn();

        renderWithRedux(<Router history={history}><DashboardPage /></Router>, {
            initialState: {
                user: {
                    displayName: 'John Smith'
                }
            },
            route: '/dashboard'
        })
        const startJournalLink = screen.getByText('Add Journal Entry')
        fireEvent.click(startJournalLink);
        expect(history.push).toHaveBeenCalledWith('/journal');
    })
})
