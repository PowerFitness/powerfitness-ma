import * as setPlanAction from './setPlanAction';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('../utils/getIdToken', () => ({
    getIdToken: jest.fn(() => 'token')
}))

describe('setPlanAction', () => {
    test('save plan - with id', async () => {
        const motivStat = 'motiv';
        const weeklyExercise = 4;
        const dailyExercise = 30;
        const water = 70;
        const calorie = 2000;
        const state = {
            user: {
                uid: 'abc'
            },
            planFetched: {
                id: 1
            },
            goalsFetched: {

            }
        }
        const dispatch = jest.fn();
        const getState = jest.fn( () => state);
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
        mock.onPut('/api/powerfitness/plan', plan, { headers: { Authorization: 'Bearer token' } }).reply(200);
        await setPlanAction.savePlan(motivStat, weeklyExercise, dailyExercise, water, calorie)(dispatch, getState)
        expect(dispatch).toHaveBeenCalledWith({ type: 'refetch/plan', payload: {
            'url': '/api/powerfitness/plan?userUniqueId=abc'
        }
        });
    })
})
