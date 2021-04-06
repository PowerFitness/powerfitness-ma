import _ from 'lodash';

export const plan = (state) => state.planFetched
export const isNewUser = (state) => _.isEmpty(plan(state))

export const getMotivation = (state) => plan(state).motivationStatement

export const goals = (state) => state.goalsFetched
export const goalWeeklyExercise = (state) => goals(state).weeklyExercise.value
export const goalDailyExercise = (state) => goals(state).dailyExercise.value
export const goalDailyWater = (state) => goals(state).dailyWater.value
export const goalDailyCalories = (state) => goals(state).dailyCalories.value

export const weeklyExercise = state => goals(state).weeklyExercise
export const dailyExercise = state => goals(state).dailyExercise
export const dailyWater = state => goals(state).dailyWater
export const dailyCalories = state => goals(state).dailyCalories

const weeklyExerciseEditFetched = () => {

}

