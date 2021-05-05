import * as uiActions from './uiActions';

describe('uiActions', () => {
    test('setUiAction', () => {
        const action = {
            isSignInOpen: false
        };
        expect(uiActions.setUiAction(action)).toEqual(
            {
                type: 'setUiAction',
                payload: { isSignInOpen: false }
            })
    })
})
