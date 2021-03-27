import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../toolkit/NavLink';
import { PrimaryButton } from '../toolkit/PrimaryButton'
import { PrimaryHeader } from '../toolkit/PrimaryHeader';
import { Modal } from '../toolkit/Modal';
import Auth from './FirebaseAuth';
import { useSelector, useDispatch } from 'react-redux';
import * as uiSelectors from '../../selectors/uiSelectors';
import * as uiActions from '../../actions/uiActions';

const StyledPrimaryHeader = styled(PrimaryHeader)`
    justify-content: space-between;
`;

const Logo = styled(NavLink)`
    font-weight: 700;
`;


export const SignInHeader = () => {
    const isSignInOpen = useSelector(uiSelectors.isSignInOpen);
    const dispatch = useDispatch()
    const toggleOpen = () => {
        dispatch(uiActions.setUiAction({ isSignInOpen: !isSignInOpen }));
    }
    return (<StyledPrimaryHeader>
        <Logo to="/dashboard">PowerFitness</Logo>
        <PrimaryButton height="34px" width="120px" onClick={toggleOpen}>Log In</PrimaryButton>
        <Modal isOpen={isSignInOpen} toggleOpen={toggleOpen}><Auth/></Modal>
    </StyledPrimaryHeader>)
}

export default SignInHeader;
