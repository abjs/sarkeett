import React from "react";
import "./Main.css";
// import BgImage from '../../Component/BgImage/BgImage'
// import Image from './bg_home.png'

import logo from "./logo.png";
import { IconButton } from "@material-ui/core";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
export default function Main() {
    document.body.style.backgroundColor = "black";
    return (
        <div className="Main">
            {/* <BgImage Img={Image}/> */}
            <div className="Main__logo">
                <img src={logo} alt="Home Logo" />
            </div>
            <div className="Main__contaner">
                <div className="Main__plases">
                    <div className="main__box">
                        <FilterHdrIcon />
                        <h1>Trending Places</h1>
                    </div>
                </div>

                <div className="main__Icon__buttons">
                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <RssFeedIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Feed</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>

                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <ChatIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Chat</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>

                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <SearchIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Explore</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>

                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <ControlPointIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Post</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>

                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <AccountCircleIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Profile</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>

                    <div className="main__Icon__button__elament">
                        <IconButton>
                            <div className="Icon__Button">
                                <div className="main__Icon__buttons_img">
                                    <SettingsIcon fontSize="large" />
                                </div>
                                <div className="icon__type">
                                    <h4>Settings</h4>
                                </div>
                            </div>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
// style={{ width: "100px", height: "100px" }}
// style={{ width: "100px", height: "100px" }}
// style={{ width: "100px", height: "100px" }}
// style={{ width: "100px", height: "100px" }}
// style={{ width: "100px", height: "100px" }}
//  style={{ width: "100px", height: "100px" }}
