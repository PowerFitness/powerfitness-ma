import * as planActions from './planActions';

describe('planActions', () => {
    test('refetchPlan', () => {
        const userUniqueId = 'abc';
        expect(planActions.refetchPlan(userUniqueId)).toEqual(
            {
                type:'refetch/plan',
                payload: {
                    url: '/api/powerfitness/plan?userUniqueId=abc'
                }
            })
    })
})
