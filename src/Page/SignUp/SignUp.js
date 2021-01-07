// import React, { useContext,useState, useEffect } from "react";
import React, { useCallback, useContext,useState, useEffect } from "react";
import "./SignUp.css";
import { Redirect } from "react-router";
import { AuthContext } from "../../helper/Auth";
import logo from "./logo.png";
import { withRouter } from "react-router";
import app from "../../helper/firebase";
import validate from './validateInfo';
const SignUp = ({ history }) => {
  const [values, setValues] = useState({
      username: '',
      email: '',
      password: '',
      password2: ''
    });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
  //   const sendVerificationEmail = () => {
  //     //Built in firebase function responsible for sending the verification email
  //     app.auth.currentUser.sendEmailVerification()
  //     .then(() => {
  //         console.log('Verification Email Sent Successfully !');
  //     })
  //     .catch(error => {
  //         console.error(error);
  //     });
  // }
    const firebase_user_register = useCallback(async (email, password) => {
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password)
          history.push("/home");
      } catch (error) {
        alert(error);
      }
    }, [history]);
   

    useEffect(
      () => {
        // console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmitting) {
          firebase_user_register(values.email,values.password);
          // console.log(values)
         
        }
        else{
          console.log("Abin Sum error in it")
        }
      },
      [errors,isSubmitting,values,firebase_user_register]
    );


    const  handleSignUp = e => {
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
              type='email'
              name='email'
              placeholder='Enter your email'
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
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
              className="SignUp__right_contaner_con2"
            />
           <div className="SignUp__right_contaner__form_error">
           {errors.password && <p>{errors.password}</p>}
           </div>

            <input
              id="confirmpassword"
              name='password2'
              type="password"
              placeholder='Confirm your password'
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
            Sing In
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

