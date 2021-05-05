import * as fetchesReducer from './fetchesReducer';

describe('fetchesReducer', () => {
    test('fetch reducer - started', () => {
        const state = {}
        const action = { type: 'fetchStarted/plan', payload: { url:'/api/powerfitness/plan?userUniqueId=abc' } }
        expect(fetchesReducer.fetchesReducer(state, action)).toEqual({
            '/api/powerfitness/plan?userUniqueId=abc' : 'started'
        })
    })
    test('fetch reducer - complete', () => {
        const state = {}
        const action = { type: 'fetchComplete/plan', payload: { url: '/api/powerfitness/plan?userUniqueId=abc' } }
        expect(fetchesReducer.fetchesReducer(state, action)).toEqual({
            '/api/powerfitness/plan?userUniqueId=abc' : 'complete'
        })
    })
    test('fetch reducer - error', () => {
        const state = {}
        const action = { type: 'fetchError/plan', payload: { url: '/api/powerfitness/plan?userUniqueId=abc' } }
        expect(fetchesReducer.fetchesReducer(state, action)).toEqual({
            '/api/powerfitness/plan?userUniqueId=abc' : 'error'
        })
    })
    test('fetch reducer - refetch', () => {
        const state = {}
        const action = { type: 'refetch/plan', payload: { url: '/api/powerfitness/plan?userUniqueId=abc' } }
        expect(fetchesReducer.fetchesReducer(state, action)).toEqual({
            '/api/powerfitness/plan?userUniqueId=abc' : 'refetch'
        })
    })
})
