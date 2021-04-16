import { useSelector } from 'react-redux';
import * as userSelectors from '../../selectors/userSelectors';
import * as dateSelector from '../../selectors/dateSelector';
import { useFetch } from './useFetch';

export const fetchResultsUrl = (userUniqueId, date) => `/api/powerfitness/results?userUniqueId=${userUniqueId}&date=${date}`

export const useResultsFetch = () => {
    const userUniqueId = useSelector(userSelectors.userUniqueId);
    const date = useSelector(dateSelector.selectedDate);
    const useFetched = useFetch(fetchResultsUrl(userUniqueId, date), 'results');
    return useFetched;
}
