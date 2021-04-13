import { actionTypes } from '../components/fetches/useFetch';
import { resultsFormatter } from '../utils/resultsFormatter'

const initialState = {}

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.fetchComplete('results'): {
        const results = action.payload.data;
        return resultsFormatter(results)
    }
    default:
        return state
    }
}

export default resultsReducer;
