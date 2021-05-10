import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {

    render(){
        return (
            <Router>
                <Route path="/accounts/login">
                    <LoginForm />
                </Route>
                <Route path="/accounts/register">
                    <RegisterForm />
                </Route>
            </Router>
        )
    }

}

export default App;