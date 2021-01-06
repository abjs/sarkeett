import React from "react";
import "./Main.css";
import logo from "./logo.png";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
// import { IconButton } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
export default function Main() {
  document.body.style.backgroundColor = "black";
  const history = useHistory();
  return (
    <div className="Main">
      <div className="Main__head">
        <div className="Main__logo">
          <img src={logo} alt="Home Logo" />
        </div>
      </div>

      <div className="Main__contaner">
        <div className="Main__contaner__left">
          <div className="main__box">
            <FilterHdrIcon />
            <h1>Trending Places</h1>
          </div>
        </div>

        <div className="Main__contaner__right">
          <div className="main__Icon__buttons">
            <div onClick={()=>{history.push("/feed")}} className="main__Icon__button__elament">
                <RssFeedIcon fontSize="large" />
            </div>
            <div    onClick={()=>{history.push("/page")}} className="main__Icon__button__elament">
                <ChatIcon fontSize="large" />
            </div>
            <div   onClick={()=>{history.push("/page")}} className="main__Icon__button__elament">
                <SearchIcon fontSize="large" />
            </div>
            <div    onClick={()=>{history.push("/post")}}className="main__Icon__button__elament">
                <ControlPointIcon fontSize="large" />
            </div>
            <div   onClick={()=>{history.push("/profile")}} className="main__Icon__button__elament">
                <AccountCircleIcon fontSize="large" />
            </div>
            <div   onClick={()=>{history.push("/settings")}} className="main__Icon__button__elament">
                <SettingsIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
