import { fetchPlanUrl } from '../components/fetches/usePlanFetch';
import { actionTypes } from '../components/fetches/useFetch';

export const setPlanStartAction = () => ({ type: 'setPlanStart' })
export const setPlanCompleteAction = () => ({ type: 'setPlanAction', payload: plan });
export const setPlanErrorAction = () => ({ type: 'setPlanError' });

export const refetchPlan = (userUniqueId) => ({
    type: actionTypes.refetch('plan'),
    payload: { url: fetchPlanUrl(userUniqueId) }
});
