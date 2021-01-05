import React from "react";
import "./Login.css";
import logo from "./logo.png";
// import Android from "./android.png";
// import Ios from "./ios.png";
export default function Login() {
  return (
    <div className="Login__App">
      <div className="Login__left">
        <div className="Login__left__img">
          <img src={logo} alt="Logo" />
        </div>
        <div className="Login__left__test">
          <h1>Come let us explore the world TOGETHER.</h1>
          <p>
            It is not just a media. The key to learn, listen, engage and build
            relationships.
          </p>
        </div>
      </div>
      <div className="Login__right">
        <div className="login__container">
          <div className="login__container__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="login__container__start">
            <form action="#">
              <input
                type="text"
                className="login__container__input__elament"
                placeholder="Mobile number, email, or username"
              />
              <input
                type="text"
                className="login__container__input__elament"
                placeholder="Password"
              />
              <div className="login__container__input__button">
                <button className="login__container__input__button__elament">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="login__container__middle">
            <div className="login__container__input__button__forget">
              <button className="login__container__input__button__elament_forget">
                Forget password?
              </button>
            </div>

            <div className="login__container__input__button__sign_up">
              <button className="login__container__input__button__elament_Sign_Up">
                Don’t have an account? Sign Up
              </button>
            </div>
          </div>
    
          {/* <div className="login__container__input__button__sign_up">
            Get the app
          </div>

          <div className="login__container__last__icons">
            <div className="login__container__last__icons__element">
              <img src={Android} alt="Android" />
              <img src={Ios} alt="Ios" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
