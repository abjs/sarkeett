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
         <h2>Login</h2>
        </div>
        <input type="text" placeholder="Username"  className="Login__right_contaner_con2"/>
        <input type="text"  placeholder="Password" className="Login__right_contaner_con2"/>
        <button className="Login__right_contaner_con3">Login</button>
        <button className="Login__right_contaner_con5">Forget password?</button>
       
        <button className="Login__right_contaner_con4">Forget password?</button>
   
      </div>
      </div>
    </div>
  );
}

