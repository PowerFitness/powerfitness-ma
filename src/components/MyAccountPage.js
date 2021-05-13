import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { firebase } from '../utils/firebase';

const DropDownMenu = styled.div`
z-index: 3;
width: 150px;
background-color: white;
border: 1px solid lightgrey;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
position: absolute;
top: 30px;
`
const MenuItems = styled.div`
padding: 12px;
&:hover{background-color: #DDD;}
font-size: 16px;
color: black;
`

export const MyAccount = () => {
    const dispatch = useDispatch()
    const clickLogOut = () => {
        dispatch({ type: 'USER_LOGOUT' })
        firebase.auth().signOut();
    };
    return (
        <DropDownMenu id="account-menu">
            <MenuItems onClick={clickLogOut}>
                Sign Out
            </MenuItems>
        </DropDownMenu>
    );
};

export default MyAccount;
