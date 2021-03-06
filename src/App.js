import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PlanPage from './components/PlanPage';
import JournalPage from './components/JournalPage';
import SplashPage from './components/SplashPage';
import WelcomePrompt from './components/WelcomePrompt';
import DashboardPage from './components/DashboardPage';
import Header from './components/Header';
import AuthObserver from './components/firebaseAuthentication/AuthObserver';
import ValidateAuthenticated from './components/firebaseAuthentication/ValidateAuthenticated';
import Fetches from './components/fetches/Fetches';
import ValidateRoutes from './components/firebaseAuthentication/ValidateRoutes';

export const App = () => {
    return (
        <Router>
            <AuthObserver />
            <Route path="/" exact={true} component={SplashPage}/>
            <ValidateAuthenticated>
                <Fetches />
                <Route path="/:page" component={Header} />
                <Route path="/welcome" component={WelcomePrompt}/>
                <ValidateRoutes>
                    <Route path="/dashboard" component={DashboardPage}/>
                    <Route path="/journal" component={JournalPage}/>
                    <Route path="/plan" component={PlanPage}/>
                </ValidateRoutes>
            </ValidateAuthenticated>
        </Router>
    )
}

export default hot(module)(App);
