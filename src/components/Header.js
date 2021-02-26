import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const StyledHeader = styled.div`
padding: 26px 70px;
background-color: #FFF;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.18);
display: flex;
flex-direction: row;
`;
const StyledLink = styled(Link)`
height: 22px;
  color: #0081AF;
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
  margin-right: 44px;
  text-decoration: ${props=>props.selected ? "underline" : "none"};
  &[data-active] {
    color: red;
  }
`;
const Logo = styled(StyledLink)`
  font-weight: 700;
`;
const Account = styled(StyledLink)`
 margin-left: auto;
 margin-right: 0;
`;

export const Header = () => {
    const { pathname } = useLocation(); 

    return (<StyledHeader>
    <Logo to="/dashboard">PowerFitness</Logo>
    <StyledLink selected={pathname=='/dashboard'}  to="/dashboard">Dashboard</StyledLink>
    <StyledLink selected={pathname=='/plan'} to="/plan">Fitness Planning</StyledLink>
    <StyledLink selected={pathname=='/journal'} to="/journal">Daily Journal</StyledLink>
    <Account selected={pathname=='/myAccount'} to="/myAccount">My Account</Account>
    </StyledHeader>)
}
    
export default Header;
