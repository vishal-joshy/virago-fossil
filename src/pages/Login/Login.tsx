import React, { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

interface Credential {
  [key: string]: string;
}

function Login(): ReactElement {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const logo = "VIRAGO";
  const tncText =
    "By signing-in you agree to Virago's Condition of User & Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result: Credential = {};
    result[event.target.id] = event.target.value;
    setCredentials({ ...credentials, ...result });
    console.log(credentials);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = credentials;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = async () => {
    const { email, password } = credentials;
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login__logo">{logo}</div>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <h5>email</h5>
          <input type="email" name="" id="email" onChange={(e) => handleChange(e)} />
          <h5>Password</h5>
          <input type="password" name="" id="password" onChange={(e) => handleChange(e)} />
          <button className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>
        <p>{tncText}</p>
        <button className="login__registerButton" onClick={handleRegister}>
          Create Virago Account
        </button>
      </div>
    </div>
  );
}

export default Login;
