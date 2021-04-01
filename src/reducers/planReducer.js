import { actionTypes } from '../components/fetches/useFetch';
import { setPlanAction } from '../actions/setPlanAction';

const initialState = {
    id: 1,
    userUniqueId: '1234',
    motivationStatement: 'This is my motivation statement',
    createdDate: 'datetime',
    lastUpdatedDate: 'datetime',
};

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

