import React from 'react';
import LabelledInput from '../components/LabelledInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {

    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        pwconfirm: '',
        nameValid: true,
        nameValidUpdated: false,
        emailValid: true,
        emailValidUpdated: false,
        usernameValid: true,
        usernameValidUpdated: false,
        passwordValid: true,
        passwordValidUpdated: false,
        pwconfirmValid: true,
        pwconfirmValidUpdated: false,
        error: false,
        success: false,
    }

    nameUpdate(val){
        if(val.length > 2){
            this.setState({ nameValid: true })
        } else {
            this.setState({ nameValid: false })
        }
        this.setState({ nameValidUpdated: true })
        this.setState({ name: val } )
    }

    emailUpdate(val){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(val).toLowerCase())){
            this.setState({ emailValid: true })
        } else {
            this.setState({ emailValid: false })
        }
        this.setState({ emailValidUpdated: true })
        this.setState({ email: val } )
    }

    usernameUpdate(val){
        if(val.length > 2){
            this.setState({ usernameValid: true })
        } else {
            this.setState({ usernameValid: false })
        }
        this.setState({ usernameValidUpdated: true })
        this.setState({ username: val } )
    }

    passwordUpdate(val){
        if(val.length > 5){
            this.setState({ passwordValid: true })
        } else {
            this.setState({ passwordValid: false })
        }
        this.setState({ passwordValidUpdated: true })
        this.setState({ password: val } )
    }

    pwconfirmUpdate(val){
        if(val === this.state.password){
            this.setState({ pwconfirmValid: true })
        } else {
            this.setState({ pwconfirmValid: false })
        }
        this.setState({ pwconfirmValidUpdated: true })
        this.setState({ pwconfirm: val } )
    }

    auth(){

        if(this.state.nameValid && this.state.nameValidUpdated && this.state.emailValid && this.state.emailValidUpdated && this.state.usernameValid && this.state.usernameValidUpdated && this.state.passwordValid && this.state.passwordValidUpdated && this.state.pwconfirmValid && this.state.pwconfirmValidUpdated){

            var response = fetch(process.env.REACT_APP_BACKEND_URL+"/accounts/create", {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `username=${this.state.username}&email=${this.state.email}&name=${this.state.name}&password=${this.state.password}`
            }) 
            
            response.then(resp => {
                
                resp.json()
                    .then(data => {

                        if(data.status === "OK"){

                            this.setState({error: false, success: "You have successfully created an account. You will now be redirected."})
                            this.props.history.push('/accounts/login')
        
                        } else {
        
                            this.setState({success: false, error: data.error.description})
        
                        }

                })

            })

        }

    }

    render() {
        return (
            <>
                { this.state.success ? <div className="w-96 bg-green-400 rounded-xl py-6 m-auto mt-10 text-white text-center">{ this.state.success }</div> : '' }
                { this.state.error ? <div className="w-96 bg-red-500 rounded-xl py-6 m-auto mt-10 text-white text-center">{ this.state.error }</div> : '' }

                <form className="w-96 m-auto mt-20 bg-gray-100 rounded-xl pt-10">
                    <h1 className="text-xl text-center font-semibold mb-16">Sign up to { process.env.REACT_APP_INSTANCE_NAME }</h1>
                    <LabelledInput Placeholder="Name" Type="text" ChangeHandler={this.nameUpdate.bind(this)} />
                    <p className="pl-4 text-small text-red-500">{ !this.state.nameValid ? "Please enter a valid name" : "" }</p>
                    <LabelledInput Placeholder="Email" Type="text" ChangeHandler={this.emailUpdate.bind(this)} />
                    <p className="pl-4 text-small text-red-500">{ !this.state.emailValid ? "Please enter a valid Email address" : "" }</p>
                    <LabelledInput Placeholder="Username" Type="text" ChangeHandler={this.usernameUpdate.bind(this)} />
                    <p className="pl-4 text-small text-red-500">{ !this.state.usernameValid ? "Please enter a valid username" : "" }</p>
                    <LabelledInput Placeholder="Password" Type="password" ChangeHandler={this.passwordUpdate.bind(this)} />
                    <p className="pl-4 text-small text-red-500">{ !this.state.passwordValid ? "Passwords must have at least 6 characters." : "" }</p>
                    <LabelledInput Placeholder="Password Confirmation" Type="password" ChangeHandler={this.pwconfirmUpdate.bind(this)} />
                    <p className="pl-4 text-small text-red-500">{ !this.state.pwconfirmValid ? "Passwords don't match." : "" }</p>
                    <div className="p-2">
                        <Button Text="Sign up" Action={this.auth.bind(this)} />
                    </div>
                </form>
                <p className="text-center text-gray-400 mt-10">Already have an account? <br /> <Link to="/accounts/signin" className="underline">Sign in here</Link></p>
            </>
        );
    }
}

export default RegisterForm;