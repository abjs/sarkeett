import React from "react";
import Header from "../../Component/Header/Header";
import "./Settings.css";
export default function Settings() {
  document.title = "settings";
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
            <button class="settings__button__el">
              Logout
            </button>
      </div>
    </>
  );
}
