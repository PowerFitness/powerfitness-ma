import { GOAL_NAMES } from '../constants/goalNames';

export const createDefaultDailyExerciseGoal = (value) => ({
    type: 'exercise',
    name: GOAL_NAMES.dailyExercise,
    unit: 'minutes',
    value
});

export const createDefaultWeeklyExerciseGoal = (value) => ({
    type: 'exercise',
    name: GOAL_NAMES.weeklyExercise,
    unit: 'days',
    value
});

export const createDefaultWaterGoal = (value) => ({
    type: 'water',
    name: GOAL_NAMES.dailyWater,
    unit: 'ounces',
    value
});

export const createDefaultCalorieGoal = (value) => ({
    type: 'nutrition',
    name: GOAL_NAMES.dailyCalories,
    unit: 'calories',
    value
});
