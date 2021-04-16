import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as planSelectors from '../../selectors/planSelectors';
import { usePlanFetch } from '../fetches/usePlanFetch';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';

export const ValidateRoutes = ({ children }) => {
    const isFetched = (usePlanFetch());
    const isNewUser = useSelector(planSelectors.isNewUser);

    if(!isFetched) return <PulseLoader
        loading={true}
        color="#0081AF"
        css={css`display: flex;
            align-items: center;
            justify-content: center;
            height: calc(100vh - 54px)`}
    />
    else if(isNewUser && !(location.pathname === '/welcome' || location.pathname === '/plan')) {
        return <Redirect to="/welcome" />;
    } else return <>{children}</>
}

export default withRouter(ValidateRoutes);
