import _ from 'lodash';

export const plan = (state) => state.planFetched
export const isNewUser = (state) => _.isEmpty(plan(state))

export const getMotivation = (state) => plan(state).motivationStatement

export const goals = (state) => state.goalFetched
export const goalWeeklyExercise = (state) => goals(state).weeklyExercise
export const goalDailyExercise = (state) => goals(state).dailyExercise
export const goalDailyWater = (state) => goals(state).dailyWater
export const goalDailyCalories = (state) => goals(state).dailyCalories


