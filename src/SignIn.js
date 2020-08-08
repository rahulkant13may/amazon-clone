import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./SignIn.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { auth } from './firebase';

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rightIcon, toggleRightIcon] = useState(true)

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch(e => alert(e.message))
    }

    const register = (event) => {
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

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email (phone for mobile accounts)</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)}type="text"/>
                    {/* <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/> */}
                    <button onClick={login} type="submit" className="login__signInButton">Continue</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#"> Privacy Notice</a>.
                </p>
                <div className="login__needHelp">
                    {
                        rightIcon === true
                        ?   
                        <ArrowRightIcon onClick={() => toggleRightIcon(false)}  fontSize="small"/>
                        :
                        <ArrowDropDownIcon onClick={() => toggleRightIcon(true)} fontSize="small"/>
                    }
                    <span><a href="#">Need help?</a></span>
                </div>
            </div>
        </div>
        <h5 className="signIn__newToAmazon"><span>New to Amazon?</span></h5>
        <div className="login__registerButton__container">
           <button onClick={register} type="submit" className="login__registerButton">Create your Amazon Account</button>
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

export default SignIn
