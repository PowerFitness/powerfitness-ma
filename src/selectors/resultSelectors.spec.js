import * as resultSelectors from './resultSelectors';

describe('resultSelectors', () => {
    test('nutrition result sum- no result for date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {
                '2021-04-25': {}
            }
        }
        expect(resultSelectors.nutritionResultSum(date)(state)).toEqual(0)
    })
    test('nutrition result sum - no result for no date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {}
        }
        expect(resultSelectors.nutritionResultSum(date)(state)).toEqual(0)
    })
    test('nutrition result sum - result exists for date', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
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
                    ]
                }
            }
        }
        expect(resultSelectors.nutritionResultSum(date)(state)).toEqual(800)
    })
    test('water result sum - no result for date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {
                '2021-04-25': {}
            }
        }
        expect(resultSelectors.waterResultSum(date)(state)).toEqual(0)
    })
    test('water result sum - no result for no date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {}
        }
        expect(resultSelectors.waterResultSum(date)(state)).toEqual(0)
    })
    test('water result sum - result exists for date', () => {
        const date = '2021-12-31'
        const state = {
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
                        },
                        {
                            'id': 8,
                            'userUniqueId': 'abc',
                            'date': '2021-12-31T06:00:00.000Z',
                            'type': 'water',
                            'subtype': 'water',
                            'name': 'water',
                            'unit': 'ounces',
                            'value': 40,
                            'createdDate': '2021-04-11T10:12:13.000Z',
                            'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                        }
                    ]
                }
            }
        }
        expect(resultSelectors.waterResultSum(date)(state)).toEqual(110)
    })
    test('exercise result sum - no result for no date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {}
        }
        expect(resultSelectors.exerciseResultSum(date)(state)).toEqual(0)
    })
    test('exercise result sum - no result for date', () => {
        const date = '2021-04-25'
        const state = {
            resultsFetched: {
                '2021-04-25': {}
            }
        }
        expect(resultSelectors.exerciseResultSum(date)(state)).toEqual(0)
    })
    test('exercise result sum - result exists for date', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
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
                        },
                        {
                            'id': 8,
                            'userUniqueId': 'abc',
                            'date': '2021-12-31T06:00:00.000Z',
                            'type': 'exercise',
                            'subtype': 'exercise',
                            'name': 'walking',
                            'unit': 'minutes',
                            'value': 40,
                            'createdDate': '2021-04-11T10:12:13.000Z',
                            'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                        }
                    ]
                }
            }
        }
        expect(resultSelectors.exerciseResultSum(date)(state)).toEqual(70)
    })
    test ('exercise fetch', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
                    exercise:
                    [
                        {
                            'id': 4,
                            'userUniqueId': 'abc',
                            'date': '2021-12-31T06:00:00.000Z',
                            'type': 'exercise',
                            'subtype': 'exercise',
                            'name': 'walking',
                            'unit': 'minutes',
                            'value': 30,
                            'createdDate': '2021-04-11T10:12:13.000Z',
                            'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                        }
                    ]
                }
            }
        }
        expect(resultSelectors.getExercises(date)(state)).toEqual(
            [
                {
                    'id': 4,
                    'userUniqueId': 'abc',
                    'date': '2021-12-31T06:00:00.000Z',
                    'type': 'exercise',
                    'subtype': 'exercise',
                    'name': 'walking',
                    'unit': 'minutes',
                    'value': 30,
                    'createdDate': '2021-04-11T10:12:13.000Z',
                    'lastUpdatedDate': '2021-04-11T10:12:13.000Z'
                }
            ]
        )
    })
    test ('water fetch', () => {
        const date = '2021-12-31'
        const state = {
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
                    ]
                }
            }
        }
        expect(resultSelectors.getWaterQuantities(date)(state)).toEqual(
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
            ]
        )
    })
    test ('breakfast fetch', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
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
                        }
                    ]
                }
            }
        }
        expect(resultSelectors.getBreakfastItems(date)(state)).toEqual(
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
                }
            ]
        )
    })
    test ('Lunch fetch', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
                    nutrition:
                    [
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
                    ]
                }
            }
        }
        expect(resultSelectors.getLunchItems(date)(state)).toEqual(
            [
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
            ]
        )
    })
    test ('Dinner fetch', () => {
        const date = '2021-12-31'
        const state = {
            resultsFetched: {
                '2021-12-31': {
                    nutrition:
                    [
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
                        }
                    ]
                }
            }
        }
        expect(resultSelectors.getDinnerItems(date)(state)).toEqual(
            [
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
                }
            ]
        )
    })
})
