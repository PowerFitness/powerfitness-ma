import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";
import { PlanPage } from './components/PlanPage';
import { JournalPage } from './components/JournalPage';
import { SplashPage } from './components/SplashPage';
import { DashboardPage } from './components/DashboardPage';
import { MyAccountPage } from './components/MyAccountPage';
import Header from './components/Header';
import SignInHeader from './components/firebaseAuthentication/SignIn';
import Auth from './components/firebaseAuthentication/FirebaseAuth';

export const App = () => 
    <Router>
        <SignInHeader/>
        {/* <Header/> */}
        <Route path="/" component={SplashPage}/>
        <Route path="/dashboard" component={DashboardPage}/>
        <Route path="/plan" component={PlanPage}/>
        <Route path="/journal" component={JournalPage}/>
        <Route path="/myAccount" component={MyAccountPage}/>
    </Router>

export default hot(module)(App);
