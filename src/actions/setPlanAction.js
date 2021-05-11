import axios from 'axios';
import { GOAL_NAMES } from '../constants/goalNames';
import { refetchPlan } from './planActions';
import {
    createDefaultCalorieGoal,
    createDefaultDailyExerciseGoal,
    createDefaultWaterGoal,
    createDefaultWeeklyExerciseGoal
} from '../utils/createDefaultGoals';

import * as goalSelectors from '../selectors/goalSelectors';
import * as planSelectors from '../selectors/planSelectors';
import * as userSelectors from '../selectors/userSelectors';
import { getIdToken } from '../utils/getIdToken';

export const setPlanAction = {
    SAVE_PLAN: 'SAVE_PLAN',
    SAVE_GOALS: 'SAVE_GOALS'
};

export const savePlan = (motivStat, weeklyExercise, dailyExercise, water, calorie) => async (dispatch, getState) => {
    console.log('save plan')
    try {
        const state = getState();
        const token = await getIdToken();
        const userUniqueId = userSelectors.userUniqueId(state);
        const plan = {
            id: planSelectors.planId(state),
            userUniqueId,
            motivationStatement: motivStat,
            goals: [
                { ...createDefaultDailyExerciseGoal(dailyExercise), id: goalSelectors.goalId(GOAL_NAMES.dailyExercise)(state) },
                { ...createDefaultWeeklyExerciseGoal(weeklyExercise), id: goalSelectors.goalId(GOAL_NAMES.weeklyExercise)(state) },
                { ...createDefaultWaterGoal(water), id: goalSelectors.goalId(GOAL_NAMES.dailyWater)(state) },
                { ...createDefaultCalorieGoal(calorie), id: goalSelectors.goalId(GOAL_NAMES.dailyCalories)(state) }
            ]
        }
        await axios.put('/api/powerfitness/plan', plan, { headers: { Authorization: `Bearer ${token}` } })
        dispatch(refetchPlan(userUniqueId));
    } catch (e) {
        console.error(e)
    }
}
