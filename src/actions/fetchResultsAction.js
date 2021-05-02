import { fetchResultsUrl } from '../components/fetches/useResultsFetch';
import { actionTypes } from '../components/fetches/useFetch';


export const refetchResults = (userUniqueId, date) => ({
    type: actionTypes.refetch('results'),
    payload: { url: fetchResultsUrl(userUniqueId, date) }
});
