import { actionTypes } from '../components/fetches/useFetch';

export const userReducer = (state = {}, action) => {
    if (action.type.includes(actionTypes.fetchStarted(''))) {
        return { ...state, [action.payload.url]: 'started' };
    }
    if (action.type.includes(actionTypes.fetchComplete(''))) {
        return { ...state, [action.payload.url]: 'complete' };
    }
    if (action.type.includes(actionTypes.fetchError(''))) {
        return { ...state, [action.payload.url]: 'error' };
    }
    if (action.type.includes(actionTypes.refetch(''))) {
        return { ...state, [action.payload.url]: 'refetch' };
    }

    return state;
}

export default userReducer;
