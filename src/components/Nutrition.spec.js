import React from 'react';
import Nutrition from './Nutrition';
import { screen } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';

describe('Nutrition', () => {
    const listOfBreakfastItems = [
        {
            'name': 'appple',
            'subtype': 'breakfast',
            'type': 'nutrition',
            'unit': 'calories',
            'value': '100'
        }
    ]

    const listOfLunchItems = [
        {
            'name': 'pizza',
            'subtype': 'lunch',
            'type': 'nutrition',
            'unit': 'calories',
            'value': '500'
        }
    ]
    const listOfDinnerItems = [
        {
            'name': 'chicken',
            'subtype': 'dinner',
            'type': 'nutrition',
            'unit': 'calories',
            'value': '300'
        }
    ]

    test('Nutrition renders nutrition header', () => {
        renderWithReduxAndRouter(
            <Nutrition
                listOfBreakfastItems={listOfBreakfastItems}
                listOfLunchItems={listOfLunchItems}
                listOfDinnerItems={listOfDinnerItems}
            />,
            {
                initialState: {
                    user: {
                        displayName: 'Atlas Smith'
                    }
                },
                route: '/journal'
            }
        )

        expect(screen.getByText('Nutrition')).toBeInTheDocument()
        expect(screen.getByText('Breakfast')).toBeInTheDocument()
        expect(screen.getByText('Lunch')).toBeInTheDocument()
        expect(screen.getByText('Dinner')).toBeInTheDocument()
    })


    test('Nutrition renders add another breakfast item button', () =>{
        renderWithReduxAndRouter(
            <Nutrition
                listOfBreakfastItems={listOfBreakfastItems}
                listOfLunchItems={listOfLunchItems}
                listOfDinnerItems={listOfDinnerItems}
            />,
            {
                initialState: {
                    user: {
                        displayName: 'Atlas Smith'
                    }
                },
                route: '/journal'
            }
        )

        expect(screen.getByText(/Add another breakfast item/i)).toBeInTheDocument()
    })

    test('Nutrition renders add another lunch item button', () => {
        renderWithReduxAndRouter(
            <Nutrition
                listOfBreakfastItems={listOfBreakfastItems}
                listOfLunchItems={listOfLunchItems}
                listOfDinnerItems={listOfDinnerItems}
            />,
            {
                initialState: {
                    user: {
                        displayName: 'Atlas Smith'
                    }
                },
                route: '/journal'
            }
        )

        expect(screen.getByText(/Add another lunch item/i)).toBeInTheDocument()
    })

    test('Nutrition renders add another dinner item button', () => {
        renderWithReduxAndRouter(
            <Nutrition
                listOfBreakfastItems={listOfBreakfastItems}
                listOfLunchItems={listOfLunchItems}
                listOfDinnerItems={listOfDinnerItems}
            />,
            {
                initialState: {
                    user: {
                        displayName: 'Atlas Smith'
                    }
                },
                route: '/journal'
            }
        )

        expect(screen.getByText(/Add another dinner item/i)).toBeInTheDocument()
    })
})
