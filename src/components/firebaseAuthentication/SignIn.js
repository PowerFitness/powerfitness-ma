import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from '../toolkit/NavLink';
import { PrimaryButton } from '../toolkit/PrimaryButton'
import { PrimaryHeader } from '../toolkit/PrimaryHeader';
import { Modal } from '../toolkit/Modal';
import Auth from './FirebaseAuth';

const StyledPrimaryHeader = styled(PrimaryHeader)`
    justify-content: space-between;
`;

const Logo = styled(NavLink)`
    font-weight: 700;
`;


export const SignInHeader = () => {
    const [isOpen, toggleOpen] = useState(false);

    return (<StyledPrimaryHeader>
        <Logo to="/dashboard">PowerFitness</Logo>
        <PrimaryButton height="44px" width="120px" onClick={() => toggleOpen(true)}>Log In</PrimaryButton>
        <Modal isOpen={isOpen}><Auth/></Modal>
    </StyledPrimaryHeader>)
}
    
export default SignInHeader;
