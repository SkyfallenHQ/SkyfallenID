import React from 'react';
import LabelledInput from './LabelledInput';
import Button from './Button';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    usernameUpdate(val){
        this.setState({ username: val } )
    }

    passwordUpdate(val){
        this.setState({ password: val } )
    }

    auth(){

        //var username = this.state.username;
        //var password = this.state.password;

        this.setState({
            username: '',
            password: ''
        })

    }

    render() {
        return (
            <>
                <form className="w-96 m-auto mt-20 bg-gray-100 rounded-xl pt-10">
                    <h1 className="text-xl text-center font-semibold mb-16">Sign in to { process.env.REACT_APP_INSTANCE_NAME }</h1>
                    <LabelledInput Placeholder="Username" Type="text" ChangeHandler={this.usernameUpdate.bind(this)} />
                    <LabelledInput Placeholder="Password" Type="password" ChangeHandler={this.passwordUpdate.bind(this)} />
                    <div className="p-2">
                        <Button Text="Sign in" Action={this.auth.bind(this)} />
                    </div>
                </form>
                <p className="text-center text-gray-400 mt-10">Don't have an account? <br /> <Link to="/accounts/register" className="underline">Sign up here</Link></p>
            </>
        );
    }
}

export default LoginForm;