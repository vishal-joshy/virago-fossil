import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

interface Props {}

interface Credential {
  [key: string]: string;
}

function Login({}: Props): ReactElement {
  const [credentials, setCredentials] = useState({});
  const tncText =
    "By signing-in you agree to Virago's Condition of User & Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice";

  const onFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: Credential = {};
    result[e.target.id] = e.target.value;
    setCredentials({ ...credentials, ...result });
  };

  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="" alt="logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form onSubmit={(e) => submitLoginForm(e)}>
          <h5>email</h5>
          <input type="email" name="" id="email" onChange={(e) => onFormInput(e)} />
          <h5>Password</h5>
          <input type="password" name="" id="password" onChange={(e) => onFormInput(e)} />
          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>
        <p>{tncText}</p>
        <button className="login__registerButton">Create Virago Account</button>
      </div>
    </div>
  );
}

export default Login;
