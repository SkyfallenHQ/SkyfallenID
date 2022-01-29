import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import MenuBar from '../components/MenuBar';
import AboutPage from './AboutPage';
import AccountsPage from './AccountsPage';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="h-full pl-32">
                <MenuBar />
                <Switch>
                    <Route path="/dashboard/about" component={AboutPage} exact />
                    <Route path="/dashboard/accounts" component={AccountsPage} exact />
                </Switch>
            </div>
        );
    }
}

export default Dashboard;