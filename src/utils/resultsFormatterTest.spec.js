import { resultsFormatter } from './resultsFormatter'

describe('resultsFormatter', ()  => {
    test('transforms results', () => {
        const results = [
            {
                'id': 4,
                'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
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
                'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                'date': '2021-12-31T06:00:00.000Z',
                'type': 'nutrition',
                'subtype': 'dinner',
                'name': 'toast',
                'unit': 'calories',
                'value': 250,
                'createdDate': '2021-04-11T21:08:21.000Z',
                'lastUpdatedDate': '2021-04-11T21:08:21.000Z'
            },
            {
                'id': 6,
                'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                'date': '2021-12-31T06:00:00.000Z',
                'type': 'nutrition',
                'subtype': 'lunch',
                'name': 'apple',
                'unit': 'calories',
                'value': 250,
                'createdDate': '2021-04-11T21:17:10.000Z',
                'lastUpdatedDate': '2021-04-11T21:17:10.000Z'
            },
            {
                'id': 7,
                'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                'date': '2021-11-27T06:00:00.000Z',
                'type': 'nutrition',
                'subtype': 'lunch',
                'name': 'apple',
                'unit': 'calories',
                'value': 250,
                'createdDate': '2021-04-13T07:47:44.000Z',
                'lastUpdatedDate': '2021-04-13T07:47:44.000Z'
            }
        ]

        expect(resultsFormatter(results)).toEqual({
            '2021-12-31': {
                nutrition:
                [
                    {
                        'id': 4,
                        'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
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
                        'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                        'date': '2021-12-31T06:00:00.000Z',
                        'type': 'nutrition',
                        'subtype': 'dinner',
                        'name': 'toast',
                        'unit': 'calories',
                        'value': 250,
                        'createdDate': '2021-04-11T21:08:21.000Z',
                        'lastUpdatedDate': '2021-04-11T21:08:21.000Z'
                    },
                    {
                        'id': 6,
                        'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                        'date': '2021-12-31T06:00:00.000Z',
                        'type': 'nutrition',
                        'subtype': 'lunch',
                        'name': 'apple',
                        'unit': 'calories',
                        'value': 250,
                        'createdDate': '2021-04-11T21:17:10.000Z',
                        'lastUpdatedDate': '2021-04-11T21:17:10.000Z'
                    }
                ] },
            '2021-11-27': {
                nutrition: [
                    {
                        'id': 7,
                        'userUniqueId': 'y1YcqCmzXgN0zPknXjT5JAtn2Ko1',
                        'date': '2021-11-27T06:00:00.000Z',
                        'type': 'nutrition',
                        'subtype': 'lunch',
                        'name': 'apple',
                        'unit': 'calories',
                        'value': 250,
                        'createdDate': '2021-04-13T07:47:44.000Z',
                        'lastUpdatedDate': '2021-04-13T07:47:44.000Z'
                    }
                ] }
        })
    })
})
