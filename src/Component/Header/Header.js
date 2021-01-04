import React from "react";
import "./Header.css";
import logo from "./imge/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
export default function Header_New({ titile }) {
  return (
    <div className="Header_New_Eelements">
      <div className="Header_New_Eelement">
        <img src={logo} alt="logo" />
      </div>

      <div className="Header_New_Eelement">
        <p style={{ color: "#39FF14" }}> {titile} </p>
      </div>

      <div className="Header_New_Eelement">
        <IconButton>
          <HomeIcon
            className="Header_New_Icon"
            style={{ color: "#39FF14", paddingRight: "10px", fontSize: 50 }}
          />
        </IconButton>
      </div>
    </div>
  );
}
