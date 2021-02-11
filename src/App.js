import React from 'react';
import styled from 'styled-components';
import {hot} from "react-hot-loader";

const Header = styled.div`
    background-color: lightblue;
    color: green;
`;

export const App = () => <Header>
    Hi
</Header>

export default hot(module)(App);
