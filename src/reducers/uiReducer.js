
export const uiReducer = (state = { isSignInOpen: false }, action) => {
    switch (action.type) {
    case 'setUiAction':
        return{ ...state, ...action.payload };
    default:
        return state
    }
}

export default uiReducer;
