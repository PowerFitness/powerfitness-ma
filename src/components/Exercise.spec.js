import React from 'react';
import Exercise from './Exercise';
import { screen } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';

describe('Exercise', () => {
    const listOfExercises = [
        {
            'name': 'walk',
            'subtype': 'exercise',
            'type': 'exercise',
            'unit': 'minutes',
            'value': '30'
        }
    ]
    test('Exercise renders exercise header', () => {
        renderWithReduxAndRouter(
            <Exercise listOfExercises={listOfExercises}/>,
            { initialState: { }, route: '/journal' }
        )
        expect(screen.getByText('Exercise')).toBeInTheDocument()
        expect(screen.getByText('Exercise Name')).toBeInTheDocument()
        expect(screen.getByText('Duration')).toBeInTheDocument()
        expect(screen.getByText('Unit')).toBeInTheDocument()
        expect(screen.getByText('minutes')).toBeInTheDocument()
    })

    test('Exercise renders add another exercise button', () => {
        renderWithReduxAndRouter(
            <Exercise listOfExercises={listOfExercises}/>,
            { initialState: { }, route: '/journal' }
        )

        expect(screen.getByText(/Add another exercise/i)).toBeInTheDocument()
    })
})
