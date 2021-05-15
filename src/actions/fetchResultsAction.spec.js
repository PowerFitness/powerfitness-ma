import * as fetchResultsActions from './fetchResultsAction';

describe('fetchResultsActions', () => {
    test('refetchResults', () => {
        const userUniqueId = 'abc';
        const date = '2021-12-31';
        expect(fetchResultsActions.refetchResults(userUniqueId, date)).toEqual(
            {
                type:'refetch/results',
                payload: {
                    url: '/api/powerfitness/results?userUniqueId=abc&date=2021-12-31'
                }
            })
    })
})
