import { actionTypes } from '../components/fetches/useFetch';

const initialState = {}

export const goalReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.fetchComplete('plan'): {
        const { goals = [] } = action.payload.data;
        return goals.reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {})
    }
    default:
        return state
    }
}

export default goalReducer;
