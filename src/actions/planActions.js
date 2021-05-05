import { fetchPlanUrl } from '../components/fetches/usePlanFetch';
import { actionTypes } from '../components/fetches/useFetch';

export const refetchPlan = (userUniqueId) => ({
    type: actionTypes.refetch('plan'),
    payload: { url: fetchPlanUrl(userUniqueId) }
});
