import React from 'react';
import styled from 'styled-components';
import { firebase } from '../utils/firebase';

const DropDownMenu = styled.div`
z-index:1;
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
    const clickLogOut = () =>{
        firebase.auth().signOut();
    };
    return (
        <DropDownMenu>
            <MenuItems onClick={clickLogOut}>
                Sign Out
            </MenuItems>
        </DropDownMenu>
    );
};

export default MyAccount;
