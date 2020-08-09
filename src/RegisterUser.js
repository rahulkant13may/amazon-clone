import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import { auth } from './firebase';

function RegisterUser() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = (event) => {
        event.preventDefault();
        auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            history.push("/")
         })
         .catch((e) => alert(event.message))
    }
    return (
    <div className="signIn">
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
                alt=""/>
            </Link>
            <div className="login__container email">
                <h1>Create account</h1>
                <form>
                    {/* <h5>Your name</h5>
                    <input value={name} onChange={event => setName(event.target.value)}type="text"/> */}
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)}type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={registerUser} type="submit" className="login__signInButton">Create your Amazon account</button>
                </form>
                <p>
                By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#"> Privacy Notice</a>.
                </p>
                <div className="register__signIn">
                    <span>Already have an account?<Link to="/signin"><a>Sign-In</a></Link></span>
                </div>
            </div>
        </div>

        <div className="signIn__footer">
             <div className="signIn__footer__firstLine">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Help </a>
             </div>
             <span className="signIn__footer__secondLine">
                 © 1996-2020, Amazon.com, Inc. or its affiliates
             </span>
        </div>
    </div>
    )
}

export default RegisterUser
