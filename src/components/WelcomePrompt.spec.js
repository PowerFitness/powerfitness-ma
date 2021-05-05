import React from 'react';
import WelcomePrompt from './WelcomePrompt';
import { screen, fireEvent } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import renderWithRedux from '../testUtils/renderWithRedux';

describe('WelcomePrompt', () => {
    test('WelcomePrompt renders the welcome page for the user', () => {
        renderWithReduxAndRouter(<WelcomePrompt />, { initialState: { user: { displayName: 'Atlas Smith' } }, route: '/welcome' })

        expect(screen.getByText(/welcome, atlas smith/i)).toBeInTheDocument()
        expect(screen.getByText(/start fitness planning/i)).toBeInTheDocument()
    })
    test('WelcomePrompt navigates to plan page', () => {
        const history = createBrowserHistory();
        history.push = jest.fn();

        renderWithRedux(<Router history={history}><WelcomePrompt /></Router>, {
            initialState: {
                user: {
                    displayName: 'Atlas Smith',
                },
            },
        })

        const startPlanningLink = screen.getByTestId(/start-fitness-planning-navigation/i)
        fireEvent.click(startPlanningLink);
        expect(history.push).toHaveBeenCalledWith('/plan');
    })
})
