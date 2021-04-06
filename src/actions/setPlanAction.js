import axios from 'axios';

export const setPlanAction = {
    SAVE_PLAN : 'SAVE_PLAN',
    SAVE_GOAL : 'SAVE_GOAL'
};

export const savePlan = (planId, motivStat, exerciseDay, exerciseMin, water, calorie) => async (dispatch, getState) => {
    try {
        const state = getState();
        const userUniqueId = userSelectors.uid(state);
        const plan = {
            id: planId,
            userUniqueId,
            motivationStatement: motivStat,
            goals: []
        }
        await axios.put('/api/powerfitness/plan', plan)

        dispatch({
            type: setPlanAction.SAVE_PLAN,
            payload: {
                motivStat
            }
        })
    } catch (e) {
        console.log(e)
    }
}
