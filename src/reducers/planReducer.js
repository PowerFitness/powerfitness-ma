import { actionTypes } from '../components/fetches/useFetch';
import { setPlanAction } from '../actions/setPlanAction';

const initialState = {};

export const planReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.fetchComplete('plan'):
        return action.payload.data;
    case setPlanAction.SAVE_PLAN:
        return action.payload.data;
    default:
        return state
    }
}

export default planReducer;

