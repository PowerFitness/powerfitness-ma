import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as planSelectors from '../../selectors/planSelectors';
import { usePlanFetch } from '../fetches/usePlanFetch';

export const ValidateRoutes = ({ children }) => {
    const isFetched = (usePlanFetch());
    const isNewUser = useSelector(planSelectors.isNewUser);

    if(!isFetched) return <h1>Loading</h1>
    else if(isNewUser && !(location.pathname === '/welcome' || location.pathname === '/plan')) {
        return <Redirect to="/welcome" />;
    } else return <>{children}</>
}

export default withRouter(ValidateRoutes);
