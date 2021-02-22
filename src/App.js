import React from 'react';
import styled from 'styled-components';
import {   BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";
import Header from './components/Header';

export const App = () => <Header>
    <Router>
        <Route path="/" />
        <Route path="/plan" />
        <Route path="/dashboard" />
        <Route path="/journal" />
    </Router>
</Header>

export default hot(module)(App);
