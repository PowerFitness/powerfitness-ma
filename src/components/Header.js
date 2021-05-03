import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PrimaryHeader } from './toolkit/PrimaryHeader';
import { NavLink } from './toolkit/NavLink';
import MyAccount from './MyAccountPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = styled(FontAwesomeIcon)`
  color: #0081AF;
  font-size: 25px;
  width: 33px;
`

const DesktopHeader = styled(PrimaryHeader)`
    @media (max-width: 768px) {
        display: none;
    }
`;
const MobileHeader = styled(PrimaryHeader)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        &&& {
            padding: 10px 30px;
        }
    }
`;

const MobileMenu = styled.div`
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: white;
    width: 100%;
    top: 56px;
    left: 0;
    position: fixed;
    z-index: 2;

    a {
        padding: 20px; 0;
        margin-left: 0;
    }

    #account-menu {
        top: 50px;
    }
`;

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
    const [ isMenuOpen, toggleMenuOpen ] = useState(false);
    const clickMyAccount = () =>{
        toggleOpen(!isOpen);
    };
    const clickMenu = () =>{
        toggleMenuOpen(!isMenuOpen);
    };
    return (<><DesktopHeader>
        <Logo to="/dashboard">PowerFitness</Logo>
        <NavLink selected={pathname=='/dashboard'}  to="/dashboard">Dashboard</NavLink>
        <NavLink selected={pathname=='/plan'} to="/plan">Fitness Planning</NavLink>
        <NavLink selected={pathname=='/journal'} to="/journal">Daily Journal</NavLink>
        <Account  onClick={clickMyAccount}>My Account
            {isOpen? <MyAccount/> : null}
        </Account>
    </DesktopHeader>
    <MobileHeader>
        <Logo to="/dashboard">PowerFitness</Logo>
        <Menu icon="bars" onClick={clickMenu} />
        {
            isMenuOpen ?
                <MobileMenu>
                    <NavLink selected={pathname=='/dashboard'} onClick={clickMenu} to="/dashboard">Dashboard</NavLink>
                    <NavLink selected={pathname=='/plan'} onClick={clickMenu} to="/plan">Fitness Planning</NavLink>
                    <NavLink selected={pathname=='/journal'} onClick={clickMenu} to="/journal">Daily Journal</NavLink>
                    <Account onClick={clickMyAccount}>My Account
                        {isOpen? <MyAccount/> : null}
                    </Account>
                </MobileMenu> : null
        }
    </MobileHeader></>)
};

export default Header;
