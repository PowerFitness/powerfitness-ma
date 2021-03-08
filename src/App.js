import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader";
import { PlanPage } from './components/PlanPage';
import { JournalPage } from './components/JournalPage';
import { SplashPage } from './components/SplashPage';
import { DashboardPage } from './components/DashboardPage';
import { MyAccountPage } from './components/MyAccountPage';
import Header from './components/Header';
import SignInHeader from './components/firebaseAuthentication/SignInHeader';
import Auth from './components/firebaseAuthentication/FirebaseAuth';
import AuthObserver from './components/firebaseAuthentication/AuthObserver';
import ValidateAuthenticated from './components/firebaseAuthentication/ValidateAuthenticated';

export const App = () => 
    <Router>
        <AuthObserver />
        <Route path="/" exact={true} component={SplashPage}/>
        <ValidateAuthenticated>
            <Route path="/:page" component={Header} />
            <Route path="/dashboard" component={DashboardPage}/>
            <Route path="/plan" component={PlanPage}/>
            <Route path="/journal" component={JournalPage}/>
            <Route path="/myAccount" component={MyAccountPage}/>
        </ValidateAuthenticated>
    </Router>

export default hot(module)(App);
