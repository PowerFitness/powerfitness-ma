import React from 'react';
import Water from './Water';
import { screen } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';

describe('Water', () => {
    test('Water renders water header', () => {
        const listOfWaterQuantities = [
            {
                'name': 'water',
                'subtype': 'water',
                'type': 'water',
                'unit': 'ounces',
                'value': '8'
            }
        ]

        renderWithReduxAndRouter(<Water listOfWaterQuantities={listOfWaterQuantities}/>,
            {
                initialState: {},
                route: '/journal'
            }
        )

        expect(screen.getByText('Water')).toBeInTheDocument()
        expect(screen.getByText('Water Quantity')).toBeInTheDocument()
        expect(screen.getByText('Unit')).toBeInTheDocument()

        expect(screen.getByText('ounces')).toBeInTheDocument()
    })

    test('Water renders add another water entry button', () => {
        const listOfWaterQuantities = [
            {
                'name': 'water',
                'subtype': 'water',
                'type': 'water',
                'unit': 'ounces',
                'value': '8'
            }
        ]

        renderWithReduxAndRouter(<Water listOfWaterQuantities={listOfWaterQuantities}/>,
            {
                initialState: {},
                route: '/journal'
            }
        )

        expect(screen.getByText(/Add another water entry/i)).toBeInTheDocument()
    })
})
