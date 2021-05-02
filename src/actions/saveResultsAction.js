import axios from 'axios';
import * as userSelectors from '../selectors/userSelectors';

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
    console.log('exerciseResults: ', exerciseResults)

    try{
        const state = getState();
        const userUniqueId = userSelectors.userUniqueId(state);
        const results = []
        results.push(exerciseResults)
        results.push(waterResults)
        results.push(breakfastResults)
        results.push(lunchResults)
        results.push(dinnerResults)
        console.log('results: ', results)
        await axios.put(`/api/powerfitness/results/${userUniqueId}/${selectedDate}`, results)

        // dispatch action and refetch results
    } catch(e){
        console.error(e)
    }
}
