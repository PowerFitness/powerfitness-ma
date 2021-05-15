
import SplashPage from './SplashPage'
import React from 'react';
import { renderWithReduxAndRouter } from '../testUtils/renderWithReduxAndRouter';
import { screen } from '@testing-library/react';

describe('Splash page', () => {
    test('Rendering splash page', () => {
        renderWithReduxAndRouter(<SplashPage />, {
            initialState: {}, route: '/'
        })
        expect(screen).toMatchSnapshot()
    })
})
