import React from "react";
import "./Login.css";
import logo from "./logo.png";
export default function Login() {
  return (
    <div className="Login__App">
      <div className="Login__left">

        <div className="Login__left__1">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="Login__left__2">
        <h3>It is not just a media. The key to learn, listen, engage and build relationships</h3>
          <br/>
          <p>Come let us explore the world TOGETHER</p>
        </div>

      

     
      </div>


      <div className="Login__right">
      <div className="Login__right_contaner">
        <div className="Login__right_contaner_con0">
          <img src={logo} alt="logo"/>
        </div>
        <div className="Login__right_contaner_con1">
         <h2>Sign Up</h2>
        </div>
        <input type="text" placeholder="Mobile number or Email"  className="Login__right_contaner_con2"/>
        <input type="text" placeholder="Full Name"  className="Login__right_contaner_con2"/>
        <input type="text" placeholder="Username"  className="Login__right_contaner_con2"/>
        <input type="text"  placeholder="Password" className="Login__right_contaner_con2"/>
        <input type="text" placeholder="Confirm Password"  className="Login__right_contaner_con2"/>
        <button className="Login__right_contaner_con3">SSBHdba</button>
        <p className="Login__right_contaner_con4">
        By signing up, agree to our Terms,
        
        Data, Policy, and Cookies Policy
        </p>
      </div>
      </div>
    </div>
  );
}

