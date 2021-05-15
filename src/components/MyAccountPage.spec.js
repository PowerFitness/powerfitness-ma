import React from 'react';
import MyAccount from './MyAccountPage';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
const mocksignOut = jest.fn();
jest.mock('../utils/firebase', () => ({
    firebase: {
        auth: () => ({
            signOut: mocksignOut
        })
    }
}));

describe('MyAccountPage', () => {
    test('Rendering MyAccount dropdown for User', () => {
        render(<MyAccount/>)
        expect(screen.getByText('Sign Out')).toBeInTheDocument()
    })
    test('Myaccount page navigates to login page', async () => {
        render(<MyAccount/>)
        const signOutLink = screen.getByText('Sign Out')
        fireEvent.click(signOutLink);
        await waitFor(() => expect(mocksignOut).toHaveBeenCalled())
    })
})
