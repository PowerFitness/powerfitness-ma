import { actionTypes } from '../components/fetches/useFetch';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
    case actionTypes.fetchComplete('plan'):
        return action.payload.data;
    default:
        return state;
    }
}

export default userReducer;
