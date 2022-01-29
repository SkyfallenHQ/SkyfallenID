import React from 'react';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import ConsentStep from './pages/ConsentStep';
import Dashboard from './pages/Dashboard';
import NotFound from './components/NotFound';

class App extends React.Component {

    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/accounts/signin" component={LoginForm} exact />
                    <Route path="/accounts/signup" component={RegisterForm} exact />
                    <Route path="/external/consent" component={ConsentStep} exact />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Router>
        )
    }

}

export default App;