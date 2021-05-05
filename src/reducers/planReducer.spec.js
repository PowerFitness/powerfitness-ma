import * as planReducer from './planReducer';

describe('planReducer', () => {
    test('plan reducer - fetch plan', () => {
        const state = {}
        const action = { type: 'fetchComplete/plan', payload: { data: { id: 1, motivationStatement: 'motiv' } } }
        expect(planReducer.planReducer(state, action)).toEqual({
            id: 1,
            motivationStatement: 'motiv'
        })
    })
    test('plan reducer - save plan', () => {
        const state = { motivationStatement: 'motiv' }
        const action = { type: 'SAVE_PLAN', payload: { id: 1 } }
        expect(planReducer.planReducer(state, action)).toEqual({
            id: 1,
            motivationStatement: 'motiv'
        })
    })
})
