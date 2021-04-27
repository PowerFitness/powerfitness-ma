import * as goalSelectors from './goalSelectors';

describe('goalSelectors', () => {
    test('goals fetched', () => {
        const state = {
            goalsFetched: {
                dailyExercise: {
                    id: 1,
                    planId: 1,
                    type: 'exercise',
                    name: 'dailyExercise',
                    unit: 'minutes',
                    value: 30,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                },
                weeklyExercise: {
                    id: 2,
                    planId: 1,
                    type: 'exercise',
                    name: 'weeklyExercise',
                    unit: 'days',
                    value: 2,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                },
                dailyWater: {
                    id: 3,
                    planId: 1,
                    type: 'water',
                    name: 'dailyWater',
                    unit: 'ounces',
                    value: 40,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                },
                dailyCalories: {
                    id: 4,
                    planId: 1,
                    type: 'nutrition',
                    name: 'dailyCalories',
                    unit: 'calories',
                    value: 2000,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                }
            }
        }
        expect(goalSelectors.goals(state)).toEqual({
            dailyExercise: {
                id: 1,
                planId: 1,
                type: 'exercise',
                name: 'dailyExercise',
                unit: 'minutes',
                value: 30,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            },
            weeklyExercise: {
                id: 2,
                planId: 1,
                type: 'exercise',
                name: 'weeklyExercise',
                unit: 'days',
                value: 2,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            },
            dailyWater: {
                id: 3,
                planId: 1,
                type: 'water',
                name: 'dailyWater',
                unit: 'ounces',
                value: 40,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            },
            dailyCalories: {
                id: 4,
                planId: 1,
                type: 'nutrition',
                name: 'dailyCalories',
                unit: 'calories',
                value: 2000,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            }
        })
    })
    test('goal name fetched', () => {
        const goalName = 'dailyExercise'
        const goalName2 = 'dailyWater'

        const state = {
            goalsFetched: {
                dailyExercise: {
                    id: 1,
                    planId: 1,
                    type: 'exercise',
                    name: 'dailyExercise',
                    unit: 'minutes',
                    value: 30,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                },
                dailyWater: {
                    id: 3,
                    planId: 1,
                    type: 'water',
                    name: 'dailyWater',
                    unit: 'ounces',
                    value: 40,
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                }
            }
        }
        expect(goalSelectors.goal(goalName)(state)).toEqual(
            {
                id: 1,
                planId: 1,
                type: 'exercise',
                name: 'dailyExercise',
                unit: 'minutes',
                value: 30,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            })
        expect(goalSelectors.goal(goalName2)(state)).toEqual(
            {
                id: 3,
                planId: 1,
                type: 'water',
                name: 'dailyWater',
                unit: 'ounces',
                value: 40,
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            }
        )
    })
    test('goal id fetched', () => {
        const goalName = 'dailyExercise'
        const state = {
            goalsFetched: {
                dailyExercise: {
                    id: 1
                }
            }
        }
        expect(goalSelectors.goalId(goalName)(state)).toEqual(1)
    })
    test('goal value fetched', () => {
        const goalName = 'dailyExercise'
        const state = {
            goalsFetched: {
                dailyExercise: {
                    value: 40
                }
            }
        }
        expect(goalSelectors.goalValue(goalName)(state)).toEqual(40)
    })
})
