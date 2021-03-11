import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignInHeader from './firebaseAuthentication/SignInHeader';
import * as userSelectors from '../selectors/userSelectors';

export const SplashPage = () => {
    const isPendingAuthStateChange = useSelector(userSelectors.isPendingAuthStateChange);
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);
    if (isPendingAuthStateChange) {
        return null;
    }
    if(isAuthenticated) return <Redirect to="/dashboard" />
    return <>
        <SignInHeader/>
        <div>PowerFitness Splash Page</div>
    </>
}

export default SplashPage;
