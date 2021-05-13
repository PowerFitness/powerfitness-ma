import * as fetchResultsActions from './fetchResultsAction';

describe('fetchResultsActions', () => {
    test('refetchResults', () => {
        const userUniqueId = 'abc';
        expect(fetchResultsActions.refetchResults(userUniqueId)).toEqual(
            {
                type:'refetch/results',
                payload: {
                    url: '/api/powerfitness/results?userUniqueId=abc&date=2021-12-31'
                }
            })
    })
})
