import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userSelectors from '../../selectors/userSelectors';

export const ValidateAuthenticated = ({ children }) => {
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);
    return isAuthenticated ? <>{children}</> : <Redirect to="/" />
}

export default ValidateAuthenticated;
