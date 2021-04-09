import { useSelector } from 'react-redux';
import * as userSelectors from '../../selectors/userSelectors';
import { useFetch } from './useFetch';

export const fetchPlanUrl = (userUniqueId) => `/api/powerfitness/plan?userUniqueId=${userUniqueId}`

export const usePlanFetch = () => {
    const userUniqueId = useSelector(userSelectors.userUniqueId);
    return useFetch(fetchPlanUrl(userUniqueId), 'plan')
}
