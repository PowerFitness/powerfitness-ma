import * as uiReducer from './uiReducer';

describe('uiReducer', () => {
    test('ui reducer', () => {
        const state = {
            isSignInOpen: false
        }
        const action = { type: 'setUiAction', payload: {  isSignInOpen: false } }
        expect(uiReducer.uiReducer(state, action)).toEqual({
            isSignInOpen: false
        })
    })
})
