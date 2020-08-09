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
    const [signInEmailFlag, unSetSignEmailFlag] = useState(true)
    const [rightIcon, toggleRightIcon] = useState(true)

    const continueButton = (event) => {
        event.preventDefault();
        if(email){
            unSetSignEmailFlag(false)
        }
    }

    const signInButton = (event) => {
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

    const inputFocus = (event) => {
        console.log("On Focus====>", event.target)
        event.target.style.border = "1px solid orange"
        event.target.style.boxShadow = "0 0 5px orange"
    }
    const inputBlur = (event) => {
        console.log("On Focus====>", event.target)
        event.target.style.background = "white";
        event.target.style.border = "1px solid #a6a6a6"
        event.target.style.boxShadow = "0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset"
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
            {
            signInEmailFlag === true
            ?
            <div className="login__container email">
                <h1>Sign In</h1>
                <form>
                    <h5>Email (phone for mobile accounts)</h5>
                    <input value={email} onFocus={inputFocus} onBlur={inputBlur} onChange={event => setEmail(event.target.value)}type="text"/>
                    {/* <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/> */}
                    <button onClick={continueButton} type="submit" className="login__signInButton">Continue</button>
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
            :
            <div className="login__container password">
                <h1>Sign In</h1>
                <form>
                    <div className="password__signInUser">
                        <h5>{email}</h5>
                        <h5><a href="">Change</a></h5>
                    </div>
                    <div className="password__heading">
                        <h5>Password</h5>
                        <h5>Forgot your password?</h5>
                    </div>
                    <input value={password} onFocus={inputFocus} onBlur={inputBlur} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={signInButton} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <div className="password__keepSignIn">
                    <input type="checkbox"/>
                    <span>Keep me signed in.<a href="#">Detail</a></span>
                </div>
            </div>
            }


        </div>
        {
        signInEmailFlag
        ?
        <>
            <h5 className="signIn__newToAmazon"><span>New to Amazon?</span></h5>
            <div className="login__registerButton__container">
                <Link to="register">
                    <button type="submit" className="login__registerButton">Create your Amazon Account</button>
                </Link>
            </div>
        </>
        :
        ''
        }


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
