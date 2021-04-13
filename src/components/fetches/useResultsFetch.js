import { useSelector } from 'react-redux';
import * as userSelectors from '../../selectors/userSelectors';
import { useFetch } from './useFetch';

export const fetchResultsUrl = (userUniqueId, date) => `/api/powerfitness/results?userUniqueId=${userUniqueId}`

export const useResultsFetch = () => {
    const userUniqueId = useSelector(userSelectors.userUniqueId);
    const date = useSelector(userSelectors.date);
    const useFetched = useFetch(fetchResultsUrl(userUniqueId), 'results')
    return useFetched
}
