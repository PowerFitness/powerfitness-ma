import React from 'react';
import ProgressCircleWrapper from './Donut';
import { screen } from '@testing-library/react'
import renderWithReduxAndRouter from '../testUtils/renderWithReduxAndRouter';

describe('ProgressCircleWrapper', () => {
    test('Rendering ProgressCircleWrapper for User', () => {
        renderWithReduxAndRouter(<ProgressCircleWrapper />, {
            initialState: {
                planFetched: {
                    id: 1,
                    userUniqueId: 'abc',
                    motivationStatement: 'motiv',
                },
                selectedDate: '2021-12-31',
                goalsFetched: {
                    dailyExercise: {
                        value: 60
                    },
                    weeklyExercise: {
                        value: 4
                    },
                    dailyWater: {
                        value: 80
                    },
                    dailyCalories: {
                        value: 2000
                    }
                },
                resultsFetched: {
                    '2021-12-31': {
                        water:
                            [
                                {
                                    'id': 4,
                                    'userUniqueId': 'abc',
                                    'date': '2021-12-31T06:00:00.000Z',
                                    'type': 'water',
                                    'subtype': 'water',
                                    'name': 'water',
                                    'unit': 'ounces',
                                    'value': 70,
                                    'createdDate': '2021-04-11T10:12:13.000Z',
                                    'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                                }
                            ],
                        nutrition:
                            [
                                {
                                    'id': 4,
                                    'userUniqueId': 'abc',
                                    'date': '2021-12-31T06:00:00.000Z',
                                    'type': 'nutrition',
                                    'subtype': 'breakfast',
                                    'name': 'toast',
                                    'unit': 'calories',
                                    'value': 250,
                                    'createdDate': '2021-04-11T10:12:13.000Z',
                                    'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                                },
                                {
                                    'id': 5,
                                    'userUniqueId': 'abc',
                                    'date': '2021-12-31T06:00:00.000Z',
                                    'type': 'nutrition',
                                    'subtype': 'dinner',
                                    'name': 'pasta',
                                    'unit': 'calories',
                                    'value': 300,
                                    'createdDate': '2021-04-11T21:08:21.000Z',
                                    'lastUpdatedDate': '2021-04-11T21:08:21.000Z'
                                },
                                {
                                    'id': 6,
                                    'userUniqueId': 'abc',
                                    'date': '2021-12-31T06:00:00.000Z',
                                    'type': 'nutrition',
                                    'subtype': 'lunch',
                                    'name': 'apple',
                                    'unit': 'calories',
                                    'value': 250,
                                    'createdDate': '2021-04-11T21:17:10.000Z',
                                    'lastUpdatedDate': '2021-04-11T21:17:10.000Z'
                                }
                            ],
                        exercise:
                            [
                                {
                                    'id': 4,
                                    'userUniqueId': 'abc',
                                    'date': '2021-12-31T06:00:00.000Z',
                                    'type': 'exercise',
                                    'subtype': 'exercise',
                                    'name': 'running',
                                    'unit': 'minutes',
                                    'value': 30,
                                    'createdDate': '2021-04-11T10:12:13.000Z',
                                    'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                                }
                            ]
                    }
                }
            }, route: '/dashboard'
        })
        expect(screen.getByText('Calories')).toBeInTheDocument()
        expect(screen.getByText('Exercise')).toBeInTheDocument()
        expect(screen.getByText('Water')).toBeInTheDocument()
        expect(screen.getByText('30 / 60 min')).toBeInTheDocument()
        expect(screen.getByText('800 / 2000 cal')).toBeInTheDocument()
        expect(screen.getByText('70 / 80 oz')).toBeInTheDocument()
    })
})
