import * as goalReducer from './goalReducer';

describe('goalReducer', () => {
    test('goal reducer - fetch complete', () => {
        const state = {}
        const action = {
            type: 'fetchComplete/plan', payload: {
                data:{
                    goals: [
                        {
                            id: 1,
                            planId: 1,
                            type: 'exercise',
                            name: 'dailyExercise',
                            unit: 'minutes',
                            value: 30,
                            createdDate: '2021-04-25 20:33:57',
                            lastUpdatedDate: '2021-04-25 20:33:57'
                        }
                    ]
                }
            }
        }
        expect(goalReducer.goalReducer(state, action)).toEqual({
            dailyExercise:{
                id: 1,
                planId: 1,
                type: 'exercise',
                name: 'dailyExercise',
                unit: 'minutes',
                value: 30,
                createdDate: '2021-04-25 20:33:57',
                lastUpdatedDate: '2021-04-25 20:33:57'
            }
        })
    })
})
