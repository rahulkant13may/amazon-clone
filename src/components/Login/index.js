import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = event => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  const register = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => alert(event.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#"> Privacy Notice</a>.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
