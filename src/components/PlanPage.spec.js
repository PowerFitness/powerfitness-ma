import React from 'react';
import PlanPage from './PlanPage';
import { PrimaryButton } from './toolkit';
import { screen, fireEvent, waitFor } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import renderWithRedux from '../testUtils/renderWithRedux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('PlanPage', () => {
    test('Rendering PlanPage for new User', () => {
        renderWithReduxAndRouter(<PlanPage />, {
            initialState: {
                user: { displayName: 'John Smith' }
            }, route: '/plan'
        })
        expect(screen.getByText('Save')).toBeInTheDocument()
        expect(screen.getByText('Save').closest(PrimaryButton)).toBeDisabled()
        expect(screen.getByText('Describe your motivation for achieving your fitness goals.')).toBeInTheDocument()
        expect(screen.getByText('What is your weekly exercise goal?')).toBeInTheDocument()
        expect(screen.getByText('How many minutes of exercise per day?')).toBeInTheDocument()
        expect(screen.getByText('How much water do you plan to drink per day?')).toBeInTheDocument()
        expect(screen.getByText('Set your daily caloric intake.')).toBeInTheDocument()
    })

    test('PlanPage checks functionality for the user', () => {
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
        expect(screen.getByText('Save').closest(PrimaryButton)).not.toBeDisabled()
    })
    test('PlanPage navigates to Dashboard page', async () => {
        const history = createBrowserHistory();
        history.push = jest.fn();
        renderWithRedux(<Router history={history}><PlanPage /></Router>, {
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
                        value: 4
                    },
                    dailyWater: {
                        value: 70
                    },
                    dailyCalories: {
                        value: 2000
                    }
                }
            }
        })
        const mock = new MockAdapter(axios);
        const plan = {
            id: 1,
            userUniqueId: 'abc',
            motivationStatement: 'motiv',
            goals: [
                {
                    type: 'exercise',
                    name: 'dailyExercise',
                    unit: 'minutes',
                    value: 30
                },
                {
                    type: 'exercise',
                    name: 'weeklyExercise',
                    unit: 'days',
                    value: 4
                },
                {
                    type: 'water',
                    name: 'dailyWater',
                    unit: 'ounces',
                    value: 70
                },
                {
                    type: 'nutrition',
                    name: 'dailyCalories',
                    unit: 'calories',
                    value: 2000
                }
            ]
        }
        mock.onPut('/api/powerfitness/plan', plan).reply(200);
        const save = await waitFor(() => screen.getByText('Save'))
        fireEvent.click(save);
        await waitFor(() => expect(history.push).toHaveBeenCalledWith('/dashboard'))
    })
    test('if new User, check save button is disabled', () => {
        renderWithReduxAndRouter(<PlanPage />, {
            initialState: { user: { displayName: 'John Smith' } }, route: '/plan' })
        expect(screen.getByText('Save').closest(PrimaryButton)).toBeDisabled()
    })
    test('if existing User, check save button is enabled for editing', () => {
        renderWithReduxAndRouter(<PlanPage />, {
            initialState: {
                user: {
                    displayName: 'John Smith'
                },
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
                        value: 4
                    },
                    dailyWater: {
                        value: 70
                    },
                    dailyCalories: {
                        value: 2000
                    }
                }
            }, route: '/plan' })
        expect(screen.getByText('Save').closest(PrimaryButton)).not.toBeDisabled()
    })
})
