import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PrimaryHeader } from './toolkit/PrimaryHeader';
import { NavLink } from './toolkit/NavLink';
import MyAccount from './MyAccountPage';

const Logo = styled(NavLink)`
  	font-weight: 700;
`;
const Account = styled(NavLink)`
    position: relative;
	margin-left: auto;
	margin-right: 0;
`;

export const Header = () => {
    const { pathname } = useLocation();
    const [ isOpen, toggleOpen ] = useState(false);
    const clickMyAccount = () =>{
        toggleOpen(!isOpen);
    };
    return (<PrimaryHeader>
        <Logo to="/dashboard">PowerFitness</Logo>
        <NavLink selected={pathname=='/dashboard'}  to="/dashboard">Dashboard</NavLink>
        <NavLink selected={pathname=='/plan'} to="/plan">Fitness Planning</NavLink>
        <NavLink selected={pathname=='/journal'} to="/journal">Daily Journal</NavLink>
        <Account selected={pathname=='/myAccount'} to="/myAccount" onClick={clickMyAccount}>My Account
            {isOpen? <MyAccount/> : null}
        </Account>
    </PrimaryHeader>)
};

export default Header;
