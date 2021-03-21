import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { isFetchComplete } from '../../selectors/fetchSelectors';

export const actionTypes = {
    fetchStarted: (name) => `fetchStarted/${name}`,
    fetchComplete: (name) => `fetchComplete/${name}`,
    fetchError: (name) => `fetchError/${name}`
}

export const useFetch = (url, name) => {
    const isComplete = useSelector(isFetchComplete(name));
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                if (url && name && !isComplete) {
                    dispatch({ type: actionTypes.fetchStarted(name), payload: { url, name } });
                    const fetchResponse = await axios.get(url);
                    dispatch({ type: actionTypes.fetchComplete(name), payload: { url, name, data: fetchResponse.data || null } })
                }
            } catch (e) {
                dispatch({ type: actionTypes.fetchError(name), payload: { url, name, error: e.message } });
            }
        })();
    }, [ url, name ]);

    return isComplete;
}
