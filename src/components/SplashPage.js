import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignInHeader from './firebaseAuthentication/SignInHeader';
import * as userSelectors from '../selectors/userSelectors';
import styled from 'styled-components';
import { Card, PrimaryButton } from './toolkit';
import * as uiActions from '../actions/uiActions';

const Image = styled.img`
    height: 420px;
    width: 320px;
`;

const Overlay = styled.div`
    position: absolute;
    height: 420px;
    width: 320px;
    border-radius: 8px;
    background-color: rgba(15,23,26,0.5);
`;

const TextOverlay = styled.div`
    position: absolute;
    height: 80px;
    width: 320px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-weight: 300;
    line-height: 40px;
`;

const StyledCard = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 366px;
    box-sizing: border-box;
`;

export const SplashPage = () => {
    const dispatch = useDispatch();
    const isPendingAuthStateChange = useSelector(userSelectors.isPendingAuthStateChange);
    const isAuthenticated = useSelector(userSelectors.isAuthenticated);
    if (isPendingAuthStateChange) {
        return null;
    }
    if(isAuthenticated) return <Redirect to="/dashboard" />
    return <>
        <SignInHeader/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '50px 0px', width: '100%' }}>
                <StyledCard height="466px" width="362px;">
                    <Overlay />
                    <Image src="./static/Exercise.png" />
                    <TextOverlay>Track your exercise</TextOverlay>
                </StyledCard>
                <StyledCard height="466px" width="362px;">
                    <Overlay />
                    <Image src="./static/Nutrition.png" />
                    <TextOverlay>Manage your nutrition</TextOverlay>
                </StyledCard>
                <StyledCard height="466px" width="362px;">
                    <Overlay />
                    <Image src="./static/Planning.png" />
                    <TextOverlay>Create your fitness plan</TextOverlay>
                </StyledCard>

            </div>
            <PrimaryButton
                height="80px"
                width="500px"
                borderRadius="50px"
                fontSize="30px"
                onClick={() => dispatch(uiActions.setUiAction({ isSignInOpen: true }))}>
                Get started with PowerFitness
            </PrimaryButton>
        </div>
    </>
}

export default SplashPage;
