import React from "react";
import "./SignUp.css";
import logo from "./logo.png";
export default function SignUp() {
  return (
    <div className="SignUp__App">
      <div className="SignUp__left">

        <div className="SignUp__left__1">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="SignUp__left__2">
        <h3>It is not just a media. The key to learn, listen, engage and build relationships</h3>
          <br/>
          <p>Come let us explore the world TOGETHER</p>
        </div>

      

     
      </div>


      <div className="SignUp__right">
      <div className="SignUp__right_contaner">
        <div className="SignUp__right_contaner_con0">
          <img src={logo} alt="logo"/>
        </div>
        <div className="SignUp__right_contaner_con1">
         <h2>Sign Up</h2>
        </div>
        <input type="text" placeholder="Mobile number or Email"  className="SignUp__right_contaner_con2"/>
        <input type="text" placeholder="Full Name"  className="SignUp__right_contaner_con2"/>
        <input type="text" placeholder="Username"  className="SignUp__right_contaner_con2"/>
        <input type="text"  placeholder="Password" className="SignUp__right_contaner_con2"/>
        <input type="text" placeholder="Confirm Password"  className="SignUp__right_contaner_con2"/>
        <button className="SignUp__right_contaner_con3">Sign Up</button>
        <p className="SignUp__right_contaner_con4">
        By signing up, agree to our Terms,
        
        Data, Policy, and Cookies Policy
        </p>
      </div>
      </div>
    </div>
  );
}

