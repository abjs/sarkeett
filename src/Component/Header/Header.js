import React from "react";
import "./Header.css";
import { useHistory } from 'react-router-dom';
import logo from "./imge/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
export default function Header_New({ titile }) {
  // document.title ="Home"
  // document.body.style.backgroundColor = "black"
  const history = useHistory();
  const gotoHome = () =>{
      // console.log("Hello")
      history.push("/home");
  }
  return (
    <div className="Header_New_Eelements">

      <div className="Header__img">
        <img src={logo} alt="logo" />
      </div>

      <div className="Header_center">
        <p style={{ color: "#39FF14",fontSize: "9vh" }}> {titile} </p>
      </div>


      <div onClick={gotoHome} className="Header_right">

        <IconButton>
          <HomeIcon
            className="Header_New_Icon"
            style={{ color: "#39FF14", fontSize: "9vh" }}
          />
        </IconButton>
      </div>


    </div>
  );
}
