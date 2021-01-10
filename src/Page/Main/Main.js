import React from "react";
import "./Main.css";
// import logo from "./mob.jpg";
import PhotoIcon from '@material-ui/icons/Photo';
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
// import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from 'react-router-dom';
import app from '../../helper/firebase'
export default function Main() {
  document.body.style.backgroundColor = "black";
  document.title = "Home";
  const history = useHistory();
  return (
    <div className="Main">


      <div className="Main__logout">
        <button onClick={() => app.auth().signOut()}>Logout</button>
      </div>


      <div className="Main__contaner">

        <div className="Main__contaner__left">

          <div className="main__box">    
            <FilterHdrIcon style={{ fontSize: 50 }}/>
            <p>Trending Places</p>
          </div>

        </div>

        <div className="Main__contaner__right">
          <div className="main__Icon__buttons">

            <div onClick={() => { history.push("/album") }} className="main__Icon__button__elament " id="Main_btn1" >
              <PhotoIcon  style={{ fontSize:60 }} />
            </div>
            <div onClick={() => { history.push("/page") }} className="main__Icon__button__elament " id="Main_btn2">
              <ChatIcon  style={{ fontSize:60 }} />
            </div>
            <div onClick={() => { history.push("/page") }} className="main__Icon__button__elament " id="Main_btn3">
              <SearchIcon  style={{ fontSize:60 }} />
            </div>
            <div onClick={() => { history.push("/post") }} className="main__Icon__button__elament" id="Main_btn4">
              <ControlPointIcon  style={{ fontSize:60 }} />
            </div>
            <div onClick={() => { history.push("/profileupdate") }} className="main__Icon__button__elament" id="Main_btn5">
              <AccountCircleIcon  style={{ fontSize:60 }} />
            </div>
            <div onClick={() => { history.push("/settings") }} className="main__Icon__button__elament" id="Main_btn6">
              <SettingsIcon  style={{ fontSize:60 }} />
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}
