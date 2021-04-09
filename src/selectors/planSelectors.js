import _ from 'lodash';

export const plan = (state) => state.planFetched
export const planId = (state) => state.planFetched.id
export const isNewUser = (state) => _.isEmpty(plan(state))
export const getMotivation = (state) => plan(state).motivationStatement


