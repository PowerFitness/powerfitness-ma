import axios from 'axios';
import * as userSelectors from '../selectors/userSelectors';
import * as fetchResultsAction from './fetchResultsAction'

export const saveResultsAction = {
    SAVE_RESULTS: 'SAVE_RESULTS'
}

export const saveResults = (
    selectedDate,
    exerciseResults,
    waterResults,
    breakfastResults,
    lunchResults,
    dinnerResults
) => async (dispatch, getState) => {
    try{
        const state = getState();
        const userUniqueId = userSelectors.userUniqueId(state);

        const results = [ ...exerciseResults, ...waterResults, ...breakfastResults, ...lunchResults, ...dinnerResults ]
        const newResultsArray = results.filter(result => result.value !== '')

        await axios.put(`/api/powerfitness/results/${userUniqueId}/${selectedDate}`, newResultsArray)

        dispatch(fetchResultsAction.refetchResults(userUniqueId, selectedDate))
    } catch(e){
        console.error(e)
    }
}
