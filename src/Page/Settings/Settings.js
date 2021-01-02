import React from "react";
import homelogo from "./img/homelogo.png";
import salogo from "./img/salogo.png";
import "./Settings.css";
export default function Settings() {
  document.title ="settings"
  return (
    <>
      <div className="Settings">
        <div className="salogo">
          <img src={salogo} alt="Sarkktt Logo" />
        </div>
        <div className="homelogo">
          <img src={homelogo} alt="Home Logo" />
        </div>
      </div>

      <div className="Stt-h1">
        <div className="heading">
        <h1>SETTINGS</h1>
        </div>
         
      </div>
    <div className="bin-flex" >
      <div className="buttons">
        <div className="bun">
          <button class="button-settings button1">
            <span className="para">Log In with another account</span>
          </button>
        </div>
        <div className="bun">
          <button class="button-settings button1">
            <span className="para">Delete  account</span>
          </button>
        </div>
        <div className="bun">
          <button class="button-settings button1">
            <span className="para">LogOut</span>
          </button>
        </div>
        </div>

      </div>



    </>
  );
}
