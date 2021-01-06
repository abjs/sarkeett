import React,{ useCallback } from "react";
import "./SignUp.css";
import logo from "./logo.png";
import { withRouter } from "react-router";
import app from '../../helper/firebase'
const  SignUp = ({ history }) =>{
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {full_name,user_name, email, password,confirm_password } = event.target.elements;
    console.log(full_name.value,user_name.value,email.value,password.value,confirm_password.value)
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);
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
      <form className="SignUp__right_contaner__form" onSubmit={handleSignUp}>      
        <input name="email" type="email" placeholder="Email"  className="SignUp__right_contaner_con2"/>
        <input name="full_name" type="text" placeholder="Full Name"  className="SignUp__right_contaner_con2"/>
        <input name="user_name" type="text" placeholder="Username"  className="SignUp__right_contaner_con2"/>
        <input name="password" type="password"  placeholder="Password" className="SignUp__right_contaner_con2"/>
        <input name="confirm_password" type="password"  placeholder="Confirm Password"  className="SignUp__right_contaner_con2"/>
        <button type="submit" className="SignUp__right_contaner_con3">Sign Up</button>
    </form>
        <p className="SignUp__right_contaner_con4">
        By signing up, agree to our Terms,
        
        Data, Policy, and Cookies Policy
        </p>
      </div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
