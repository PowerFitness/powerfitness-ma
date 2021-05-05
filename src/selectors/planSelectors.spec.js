import * as planSelectors from './planSelectors';

describe('planSelectors', () => {
    test('selected plan', () => {
        const state =
            {
                planFetched:{
                    id: 1,
                    userUniqueId: 'abc',
                    motivationStatement: 'motiv',
                    createdDate: '2021-04-26T01:33:57.000Z',
                    lastUpdatedDate: '2021-04-26T01:33:57.000Z'
                }
            }
        expect(planSelectors.plan(state)).toEqual(
            {
                id: 1,
                userUniqueId: 'abc',
                motivationStatement: 'motiv',
                createdDate: '2021-04-26T01:33:57.000Z',
                lastUpdatedDate: '2021-04-26T01:33:57.000Z'
            }
        )
    })
    test('selected planId', () => {
        const state = {
            planFetched:{
                id: 1
            }
        }
        expect(planSelectors.planId(state)).toEqual(1)
    })
    test('check empty plan', () => {
        const state = { planFetched: {} }
        expect(planSelectors.isNewUser(state)).toEqual(true)
    })
    test('plan motivation', () => {
        const state = {
            planFetched:{
                motivationStatement: 'motiv'
            }
        }
        expect(planSelectors.getMotivation(state)).toEqual('motiv')
    })
})
