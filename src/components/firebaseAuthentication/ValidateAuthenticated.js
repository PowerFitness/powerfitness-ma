import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userSelectors from '../../selectors/userSelectors';

export const ValidateAuthenticated = ({ children }) => {
    const isPendingAuthStateChange = useSelector(userSelectors.isPendingAuthStateChange);
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);
    if (isPendingAuthStateChange) {
        return null;
    }
    return isAuthenticated ? <>{children}</> : <Redirect to="/" />
}

export default ValidateAuthenticated;
