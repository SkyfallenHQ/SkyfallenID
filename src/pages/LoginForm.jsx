import React from 'react';
import LabelledInput from '../components/LabelledInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {AiOutlineLock} from "react-icons/ai";
import SkyfallenBranding from "../components/SkyfallenBranding";
class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        error: false,
        success: false
    }

    usernameUpdate(val){
        this.setState({ username: val } )
    }

    passwordUpdate(val){
        this.setState({ password: val } )
    }

    auth(){

        var response = fetch(process.env.REACT_APP_BACKEND_URL+"/accounts/login", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${this.state.username}&password=${this.state.password}`
        }) 
        
        response.then(resp => {
            
            resp.json()
                .then(data => {

                    if(data.status === "OK"){

                        this.setState({error: false, success: "You have successfully signed in."})
                        const cookies = new Cookies();
                        cookies.set('SkyfallenIDSession', data.token, {path: "/"})
                        let t = this
                        setTimeout(function(){
                            t.props.history.push('/dashboard')
                        }, 1500)
    
                    } else {
    
                        if(data.result === "user_not_exists"){
                            this.setState({error: "We could not find that user. Are you sure you are using the correct username?"})
                        }else if(data.result === "password_is_incorrect"){
                            this.setState({error: "The password for "+this.state.username+" is wrong."})
                        } else {
                            this.setState({error: "An unknown error has occured while communicating with CAS."})
                        }

    
                    }

            })

        })
    }

    render() {
        return (
            <div className="flex flex-row w-screen">
                {process.env.REACT_APP_SKYFALLEN_BRANDED === "true" ? <SkyfallenBranding /> : <></>}
                <div className={`flex flex-col ${process.env.REACT_APP_SKYFALLEN_BRANDED !== "true" ? "m-auto" : ""}`}>
                    <div className="m-auto">
                        <div className={`absolute ${this.state.error ? "top-10" : "-top-16"} transition-all duration-1000 ease-out w-96 bg-red-500 rounded-xl p-2 m-auto text-white text-center`}>{ this.state.error }</div>
                        <div className={`absolute ${this.state.success ? "top-10" : "-top-16"} transition-all duration-1000 ease-out w-96 bg-green-500 rounded-xl p-2 m-auto text-white text-center`}>{ this.state.success }</div>
                        <form className="w-96 m-auto mt-20 bg-gray-100 rounded-xl pt-10">
                            <h1 className="text-xl text-center font-semibold mb-16">Sign in to { process.env.REACT_APP_INSTANCE_NAME }</h1>
                            <LabelledInput Placeholder="Username" Type="text" ChangeHandler={this.usernameUpdate.bind(this)} />
                            <LabelledInput Placeholder="Password" Type="password" ChangeHandler={this.passwordUpdate.bind(this)} />
                            <div className="p-2">
                                <Button Text="Sign in" Action={this.auth.bind(this)} />
                            </div>
                        </form>
                        <p className="text-center text-gray-400 mt-10">Don't have an account? <br /> <Link to="/accounts/signup" className="underline">Sign up here</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;