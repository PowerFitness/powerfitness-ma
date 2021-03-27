import { useSelector } from 'react-redux';
import * as userSelectors from '../../selectors/userSelectors';
import { useFetch } from './useFetch';

export const usePlanFetch = () => {
    const userUniqueId = useSelector(userSelectors.userUniqueId);
    return useFetch(`/api/powerfitness/plan?userUniqueId=${userUniqueId}`, 'plan')
}
