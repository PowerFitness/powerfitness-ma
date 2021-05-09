import axios from 'axios';
import * as userSelectors from '../selectors/userSelectors';
import { getIdToken } from '../utils/getIdToken';
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
        const token = await getIdToken();
        const userUniqueId = userSelectors.userUniqueId(state);

        const results = [ ...exerciseResults, ...waterResults, ...breakfastResults, ...lunchResults, ...dinnerResults ]
        const newResultsArray = results.filter(result => result.value !== '')

        await axios.put(`/api/powerfitness/results/${userUniqueId}/${selectedDate}`,
            newResultsArray, { headers: { Authorization: `Bearer ${token}` } })

        dispatch(fetchResultsAction.refetchResults(userUniqueId, selectedDate))
    } catch(e){
        console.error(e)
    }
}
