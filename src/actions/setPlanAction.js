export const setPlanAction ={
    SAVE_PLAN : 'SAVE_PLAN',
    SAVE_GOAL : 'SAVE_GOAL'
};

export const savePlan = (motivStat, exerciseDay, exerciseMin, water, calorie) => (dispatch) =>{
    //axios call
    const plan = {
        motivationStatement: motivStat,
        goals:[]
    }
    dispatch({
        type: setPlanAction.SAVE_PLAN,
        payload: {
            motivStat
        }
    })
}
