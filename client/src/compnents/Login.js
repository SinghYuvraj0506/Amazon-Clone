import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase.js";
import {useNavigate} from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const history = useNavigate()
  const [user, setuser] = useState({ email: "", password: "" });

  const signin = async (e) => {
    e.preventDefault();
    try {
      const auth2 = await signInWithEmailAndPassword(auth,user.email,user.password)
      if(auth2){
        history("/")
      }


    } catch (error) {
      alert(error.message)
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const auth2 = await createUserWithEmailAndPassword(auth,user.email,user.password)
      if(auth2){
        history("/")
      }

    } catch (error) {
      alert(error.message)
    }
  }

  const OnChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        alt="amazon"
        className="login_logo"
      />

      <div className="login-box">
        <h1 className="login_title">Sign-In</h1>

        <form className="login_form">
          <h2 className="login_subtitle">Email</h2>
          <input
            className="input_box"
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={OnChange}
            required
          />

          <h2 className="login_subtitle">Password</h2>
          <input
            className="input_box"
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={OnChange}
            minLength={5}
            required
          />

          <input
            className="login_signin"
            type="submit"
            onClick={signin}
            value="Sign In"
          />
        </form>

        <p className="termsandconditions">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="createaccount">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
