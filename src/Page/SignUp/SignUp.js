// import React, { useContext,useState, useEffect } from "react";
import React, { useCallback, useContext, useState, useEffect } from "react";
import "./SignUp.css";
import { Redirect } from "react-router";
import { AuthContext } from "../../helper/Auth";
import logo from "./logo.png";
import { withRouter } from "react-router";
import validate from "./validateInfo";
import firebase from "firebase/app";
import app from "../../helper/firebase";
// import { Info } from "@material-ui/icons";
const db = app.firestore();
const SignUp = ({ history }) => {
  document.body.style.backgroundColor = "black";
  document.title = "Sign Up";
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const firebase_user_register = useCallback(
    async (email, password, name) => {
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((cred) => {
            return db.collection("users").doc(cred.user.uid).set({
              username: name,
              email: email,
              about: "",
              hobby: "",
              number: "",
              website: "",
              userpic: "",
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
          })
          .then(() => {
            const user = app.auth().currentUser;
            user
              .updateProfile({
                displayName: name,
              })
              .then(function () {
                // Update successful.
                history.push("/home");
              })
              .catch(function (error) {
                // An error happened.
                // console.log(error)
              });
            console.log(user);
          });
      } catch (error) {
        alert(error);
        // console.log(error)
      }
    },
    [history]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validate(values));
  };

  useEffect(() => {
    // console.log(errors)
    // console.log(Object.keys(errors).length )
    if (Object.keys(errors).length === 0 && isSubmitting) {
      firebase_user_register(values.email, values.password, values.username);
      // console.log(values)
    }
  }, [errors, isSubmitting, values, firebase_user_register]);
  const handleSignUp = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  if (currentUser) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="SignUp__App">
      <div className="SignUp__left">
        <div className="SignUp__left__1">
          <img src={logo} alt="Logo" />
        </div>

        <div className="SignUp__left__2">
          <h3>
            It is not just a media. The key to learn, listen, engage and build
            relationships
          </h3>
          <br />
          <p>Come let us explore the world TOGETHER</p>
        </div>
      </div>

      <div className="SignUp__right">
        <div className="SignUp__right_contaner">
          <div className="SignUp__right_contaner_con0">
            <img src={logo} alt="logo" />
          </div>
          <div className="SignUp__right_contaner_con1">
            <h2>Sign Up</h2>
          </div>
          <form
            className="SignUp__right_contaner__form"
            onSubmit={handleSignUp}
            noValidate
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              className="SignUp__right_contaner_con2"
            />
            <div className="SignUp__right_contaner__form_error">
              {errors.email && <p>{errors.email}</p>}
            </div>

            <input
              name="username"
              type="text"
              placeholder="Full Name"
              className="SignUp__right_contaner_con2"
              value={values.username}
              onChange={handleChange}
            />
            <div className="SignUp__right_contaner__form_error">
              {errors.username && <p>{errors.username}</p>}
            </div>

            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              className="SignUp__right_contaner_con2"
            />
            <div className="SignUp__right_contaner__form_error">
              {errors.password && <p>{errors.password}</p>}
            </div>

            <input
              id="confirmpassword"
              name="password2"
              type="password"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
              className="SignUp__right_contaner_con2"
            />
            <div className="SignUp__right_contaner__form_error">
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button type="submit" className="SignUp__right_contaner_con3">
              Sign Up
            </button>
          </form>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="SignUp__right_contaner_con6"
          >
            Sign In
          </button>
          <p className="SignUp__right_contaner_con4">
            By signing up, agree to our Terms, Data, Policy, and Cookies Policy
          </p>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SignUp);
