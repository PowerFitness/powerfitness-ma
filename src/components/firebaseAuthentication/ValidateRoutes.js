import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as planSelectors from '../../selectors/planSelectors';
import { usePlanFetch } from '../fetches/usePlanFetch';

export const ValidateRoutes = ({ children }) => {
    const isFetched = (usePlanFetch());
    const isNewUser = useSelector(planSelectors.isNewUser);
    console.log(isNewUser)
    if(!isFetched) return <h1>Loading</h1>
    return (isNewUser) ? <Redirect to="/welcome" /> : <>{children}</>
}

export default ValidateRoutes;
