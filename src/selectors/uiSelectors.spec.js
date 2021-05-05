import * as uiSelectors from './uiSelectors';

describe('uiSelectors', () =>{
    test('select ui', () => {
        const state = {
            ui: {
                isSignInOpen: false
            }
        }
        expect(uiSelectors.ui(state)).toEqual(
            {
                isSignInOpen: false
            }
        )
    })
    test('select ui', () => {
        const state = {
            ui: {
                isSignInOpen: false
            }
        }
        expect(uiSelectors.isSignInOpen(state)).toEqual(false)
    })
})
