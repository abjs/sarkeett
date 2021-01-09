import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../helper/Auth";
import app from "../../helper/firebase";
import "./Login.css";
import logo from "./logo.png";
const Login = ({ history }) => {
document.body.style.backgroundColor = "black";
document.title = "Login";
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="Login__App">
      <div className="Login__left">
        <div className="Login__left__1">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Login__left__2">
          <h3>
            It is not just a media. The key to learn, listen, engage and build
            relationships
          </h3>
          <br />
          <p>Come let us explore the world TOGETHER</p>
        </div>
      </div>
      <div className="Login__right">
        <div className="Login__right_contaner">
          <div className="Login__right_contaner_con0">
            <img src={logo} alt="logo" />
          </div>
          <div className="Login__right_contaner_con1">
            <h2>Login</h2>
          </div>
          <form className="Login__right_contaner__form" onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Username"
              className="Login__right_contaner_con2"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="Login__right_contaner_con2"
            />
            <button type="submit" className="Login__right_contaner_con3">
              Login
            </button>
          </form>
          <button onClick={()=>{history.push("/forgetpassword")}} className="Login__right_contaner_con5">
            Forget password?
          </button>
          <button onClick={()=>{history.push("/signup")}} className="Login__right_contaner_con4">
              Don’t have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
