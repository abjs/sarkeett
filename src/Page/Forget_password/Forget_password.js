import React, {useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../../helper/Auth";
import "./Forget_password.css";
import app from "../../helper/firebase";
import logo from "./logo.png";
const Forget_password = ({history}) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }
  const handleForget_password =(e) =>{
    e.preventDefault();
    const {email } = e.target.elements;
    // console.log(email.value)
    app.auth().sendPasswordResetEmail(email.value)
    .then(() => {
        console.log('Password Reset Email Sent Successfully!');
        alert('Password Reset Link Sent Email reset passwprd and login')
        history.push("login");
    })
    .catch(error => {
        // console.error(error);
        if(error.code === "auth/user-not-found"){
          alert("User not found enter valid email")
        }
        
    });

  }
//   const resetPasswordFunction = () => {
//     const email = emailField.value;

//     //Built in Firebase function that sends password reset emails
//     auth.sendPasswordResetEmail(email)
//     .then(() => {
//         console.log('Password Reset Email Sent Successfully!');
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }
  return (
    <div className="Forget__App">
      <div className="Forget__left">
        <div className="Forget__left__1">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Forget__left__2">
          <h3>
            It is not just a media. The key to learn, listen, engage and build
            relationships
          </h3>
          <br />
          <p>Come let us explore the world TOGETHER</p>
        </div>
      </div>
      <div className="Forget__right">
        <div className="Forget__right_contaner">

          <div className="Forget__right_contaner_con0">
            <img src={logo} alt="logo" />
          </div>
          <div className="Forget__right_contaner_con1">
            <h3>Forget Password</h3>
          </div>
          <form className="Forget__right_contaner__form" onSubmit={handleForget_password}>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="Forget__right_contaner_con2"
            />
            <button type="submit" className="Forget__right_contaner_con3">
            Send Forget Passord Link
            </button>
          </form>
          
          <button onClick={()=>{history.push("/signup")}} className="Forget__right_contaner_con5">
          Create New Account
          </button>

          <button onClick={()=>{history.push("/Forget")}} className="Forget__right_contaner_con4">
               Sign In
          </button>

        </div>
      </div>
    </div>
  );
};
export default withRouter(Forget_password);
