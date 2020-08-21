import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { auth } from "../../firebase";

function RegisterUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const registerUser = event => {
    event.preventDefault();
    if (password !== confirm_password) {
      console.log(
        "password field=====",
        document.querySelectorAll(".password")[0]
      );
      document
        .querySelectorAll(".password")[0]
        .setAttribute(
          "style",
          "border-color: #d00;box-shadow: 0 0 0 3px rgba(221,0,0,.1) inset"
        );
      document
        .querySelectorAll(".password")[1]
        .setAttribute(
          "style",
          "border-color: #d00;box-shadow: 0 0 0 3px rgba(221,0,0,.1) inset"
        );
    } else if (password == confirm_password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
          history.push("/");
        })
        .catch(e => alert(event.message));
    }
  };

  const inputFocus = event => {
    //     border-color: #d00;
    // box-shadow: 0 0 0 3px rgba(221,0,0,.1) inset

    console.log("On Focus====>", event.target);
    event.target.style.border = "1px solid orange";
    event.target.style.boxShadow = "0 0 5px orange";
  };
  const inputBlur = event => {
    console.log("On Focus====>", event.target);
    event.target.style.background = "white";
    event.target.style.border = "1px solid #a6a6a6";
    event.target.style.boxShadow =
      "0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset";
  };
  return (
    <div className="signIn">
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
            alt=""
          />
        </Link>
        <div className="login__container email">
          <h1>Create account</h1>
          <form>
            {/* <h5>Your name</h5>
                    <input value={name} onChange={event => setName(event.target.value)}type="text"/> */}
            <h5>Email</h5>
            <input
              value={email}
              onFocus={inputFocus}
              onBlur={inputBlur}
              onChange={event => setEmail(event.target.value)}
              type="text"
            />
            <h5>Password</h5>
            <input
              class="password"
              value={password}
              onFocus={inputFocus}
              onBlur={inputBlur}
              onChange={event => setPassword(event.target.value)}
              type="password"
              placeHolder="At least 6 characters"
            />
            {password.length < 6 && password.length != 0 ? (
              <div className="passwordWarning">
                <span>i</span>
                <span>Password must be at least 6 characters.</span>
              </div>
            ) : (
              <div className="passwordInfo">
                <span>i</span>
                <span>Password must be at least 6 characters.</span>
              </div>
            )}

            <h5>Re-enter assword</h5>
            <input
              class="password"
              value={confirm_password}
              onFocus={inputFocus}
              onBlur={inputBlur}
              onChange={event => setConfirmPassword(event.target.value)}
              type="password"
            />
            {password != confirm_password ? (
              <div className="passwordWarning">
                <span>i</span>
                <span>Password must match</span>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={registerUser}
              type="submit"
              className="login__signInButton"
            >
              Create your Amazon account
            </button>
          </form>
          <p>
            By creating an account, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#"> Privacy Notice</a>.
          </p>
          <div className="register__signIn">
            <span>
              Already have an account?
              <Link to="/signin">
                <a>Sign-In</a>
              </Link>
            </span>
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
  );
}

export default RegisterUser;
