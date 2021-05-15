
import Header from './Header'
import React from 'react';
import { renderWithReduxAndRouter } from '../testUtils/renderWithReduxAndRouter';
import { screen, fireEvent } from '@testing-library/react';

describe('Header', () => {
    test('Rendering header', () => {
        renderWithReduxAndRouter(<Header />, {
            initialState: {}, route: '/dashboard'
        })
        expect(screen.queryAllByText('PowerFitness')[0]).toBeInTheDocument()
        expect(screen.getByText('Dashboard')).toBeInTheDocument()
        expect(screen.getByText('Fitness Planning')).toBeInTheDocument()
        expect(screen.getByText('Daily Journal')).toBeInTheDocument()
        expect(screen.getByText('My Account')).toBeInTheDocument()
    })
    test('Rendering header', () => {
        renderWithReduxAndRouter(<Header />, {
            initialState: {}, route: '/dashboard'
        })
        const myAccount = screen.getByText('My Account');
        fireEvent.click(myAccount);

        expect(screen.getByText('Sign Out')).toBeInTheDocument()
    })
})
