import React from "react";
// import { Redirect } from "react-router";
// import { AuthContext } from '../../helper/Auth';
import Header from "../../Component/Header/Header";
import "./Settings.css";
import app from '../../helper/firebase'
export default function Settings() {
  document.title = "settings";
  // const { currentUser } = useContext(AuthContext);

  // if (!currentUser) {
  //   return <Redirect to="/gotologoin" />;
  // }

  return (
    <>
    <div className="setings__Head">
    <Header  titile="settings" />
    </div>

      <div className="settings__button">   
            <button class="settings__button__el">
              Log In with another account
            </button>
            <button class="settings__button__el">
              Delete account
            </button>
            <button onClick={() => app.auth().signOut()} class="settings__button__el">
              Logout
            </button>
      </div>
    </>
  );
}
