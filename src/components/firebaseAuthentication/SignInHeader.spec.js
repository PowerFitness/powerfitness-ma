
import SignInHeader from './SignInHeader'
import React from 'react';
import { renderWithReduxAndRouter } from '../../testUtils/renderWithReduxAndRouter';
import { screen } from '@testing-library/react';

describe('Header', () => {
    test('Rendering header', () => {
        renderWithReduxAndRouter(<SignInHeader />, {
            initialState: {}, route: '/dashboard'
        })
        expect(screen.getByText('Log In')).toBeInTheDocument()
        expect(screen.getByText('PowerFitness')).toBeInTheDocument();
    })
})
