import React from 'react';
import PlanPage from './PlanPage';
import { screen, fireEvent } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import renderWithRedux from '../testUtils/renderWithRedux';

describe('PlanPage', () => {
    test.todo('Navigates to Dashboard Page on saving the plan')
    test.todo('if new User, check save button is disabled')
    test.todo('if not new User, check save button is enabled')

    test('Rendering PlanPage for new User', () => {
        renderWithReduxAndRouter(<PlanPage />, {
            initialState: {}, route: '/plan'
        })
        expect(screen.getByText('Save')).toBeInTheDocument()
        expect(screen.getByText('Describe your motivation for achieving your fitness goals.')).toBeInTheDocument()
        expect(screen.getByText('What is your weekly exercise goal?')).toBeInTheDocument()
        expect(screen.getByText('How many minutes of exercise per day?')).toBeInTheDocument()
        expect(screen.getByText('How much water do you plan to drink per day?')).toBeInTheDocument()
        expect(screen.getByText('Set your daily caloric intake.')).toBeInTheDocument()
    })

    test('PlanPage checks motivation Statement functionality for the user', () => {
        renderWithReduxAndRouter(<PlanPage />, {
            initialState: {
                planFetched: {
                    id: 1,
                    userUniqueId: 'abc',
                    motivationStatement: 'motiv',
                },
                goalsFetched: {
                    dailyExercise: {
                        value: 30
                    },
                    weeklyExercise: {
                        value: 2
                    },
                    dailyWater: {
                        value: 40
                    },
                    dailyCalories: {
                        value: 2000
                    }
                }
            }, route: '/plan'
        })
        //expect(screen.)
    })
    // test('PlanPage navigates to Dashboard page', () => {
    //     const history = createBrowserHistory();
    //     history.push = jest.fn();

    //     renderWithRedux(<Router history={history}><PlanPage /></Router>, {
    //         initialState: {
    //             user: {
    //                 displayName: 'Atlas Smith',
    //             },
    //         },
    //     })

    //     const startPlanningLink = screen.getByTestId(/start-fitness-planning-navigation/i)
    //     fireEvent.click(startPlanningLink);
    //     expect(history.push).toHaveBeenCalledWith('/plan');
    // })
})
