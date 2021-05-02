import { saveResultsAction } from '../actions/saveResultsAction';
import { actionTypes } from '../components/fetches/useFetch';
import { resultsFormatter } from '../utils/resultsFormatter'

const initialState = {}

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.fetchComplete('results'): {
        const results = action.payload.data;
        return { ...state, ...resultsFormatter(results) }
    }
    case saveResultsAction.SAVE_RESULTS: {
        const { id } = action.payload
        return { ...state, id }
    }
    default:
        return state
    }
}

export default resultsReducer;
