import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { isFetchComplete, isFetchStarted, isFetchError } from '../../selectors/fetchSelectors';

export const actionTypes = {
    fetchStarted: (name) => `fetchStarted/${name}`,
    fetchComplete: (name) => `fetchComplete/${name}`,
    fetchError: (name) => `fetchError/${name}`,
    refetch: (name) => `refetch/${name}`
}

export const useFetch = (url, name) => {
    const isComplete = useSelector(isFetchComplete(url));
    const isStarted = useSelector(isFetchStarted(url));
    const isError = useSelector(isFetchError(url));
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                if (url && name && !isComplete && !isStarted && !isError) {
                    dispatch({ type: actionTypes.fetchStarted(name), payload: { url, name } });
                    const fetchResponse = await axios.get(url);
                    dispatch({ type: actionTypes.fetchComplete(name), payload: { url, name, data: fetchResponse.data || null } })
                }
            } catch (e) {
                dispatch({ type: actionTypes.fetchError(name), payload: { url, name, error: e.message } });
            }
        })();
    }, [ url, name, isComplete, isStarted ]);

    return isComplete;
}
