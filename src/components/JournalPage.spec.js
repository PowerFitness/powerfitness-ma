import React from 'react';
import JournalPage from './JournalPage';
import { screen } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';


describe('JournalPage', () => {
    test('JournalPage renders sub header when fetch is complete', () => {
        renderWithReduxAndRouter(<JournalPage />,
            {
                initialState: {
                    selectedDate: '2021-05-09',
                    user: { uid: 'testUser' },
                    fetches: {
                        '/api/powerfitness/results?userUniqueId=testUser&date=2021-05-09': 'complete'
                    }
                }
            }
        )

        expect(screen.getByText(/complete/i)).toBeInTheDocument()
        expect(screen.getByText('Exercise')).toBeInTheDocument()
        expect(screen.getByText('Water')).toBeInTheDocument()
        expect(screen.getByText('Nutrition')).toBeInTheDocument()
    })

    test('JournalPage renders DatePicker', () => {
        renderWithReduxAndRouter(<JournalPage />,
            {
                initialState: {
                    selectedDate: '2021-05-09',
                    user: { uid: 'testUser' },
                    fetches: {
                        '/api/powerfitness/results?userUniqueId=testUser&date=2021-05-09': 'complete'
                    }
                }
            }
        )
        expect(screen.getByTestId('DatePicker')).toBeInTheDocument()
    })
})
