import * as saveResultsAction from './saveResultsAction';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('../utils/getIdToken', () => ({
    getIdToken: jest.fn(() => Promise.resolve('token'))
}))

describe('saveResultsAction', () => {
    test('save result - with id', async () => {
        const selectedDate = '2021-12-31';
        const exerciseResults = 30;
        const waterResults = 50;
        const breakfastResults = 80;
        const lunchResults = 250;
        const dinnerResults = 200
        const state = {
            user: {
                uid: 'abc'
            },
            selectedDate: '2021-12-31',
            resultsFetched: {}
        }
        const dispatch = jest.fn();
        const getState = jest.fn(() => state);
        const mock = new MockAdapter(axios);
        const results = {
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
        mock.onPut('/api/powerfitness/results', results).reply(200);
        await saveResultsAction.saveResults(selectedDate, exerciseResults, waterResults,
            breakfastResults, lunchResults, dinnerResults)(dispatch, getState)
        expect(dispatch).toHaveBeenCalledWith({
            type: 'refetch/results', payload: {
                'url': '/api/powerfitness/results?userUniqueId=abc&date=2021-12-31'
            }
        });
    })
})
