import React from 'react';
import styled from 'styled-components';
import {   BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from "react-hot-loader";
import {PlanPage} from './components/PlanPage';
import {JournalPage} from './components/JournalPage';
import {SplashPage} from './components/SplashPage';
import {DashboardPage} from './components/DashboardPage';
import {MyAccountPage} from './components/MyAccountPage';
import Header from './components/Header';

export const App = () => 
<div>
        <Router>
            <Header></Header>
        <Route path="/" component={SplashPage}/>
        <Route path="/dashboard" component={DashboardPage}/>
        <Route path="/plan" component={PlanPage}/>
        <Route path="/journal" component={JournalPage}/>
        <Route path="/myAccount" component={MyAccountPage}/>
    </Router>
    </div>

export default hot(module)(App);
