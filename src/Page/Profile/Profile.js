import { Avatar, Button } from "@material-ui/core";
import React from "react";
import Header from "../../Component/Header/Header";
import "./Profile.css";
export default function Profile() {
  return (
    <>
      <div>
        <Header titile="Profile" />
      </div>
      <div className="Profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <Avatar
              src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/89942220_2385737541646997_3575095416724652032_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=vgsb74Ae3FkAX-6PJvb&_nc_ht=scontent-maa2-2.xx&oh=c37c3d971a66b5c49a45e60867ab7ca5&oe=6012660E"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
        </div>

        <div className="profile-input">
          <form action="#">
          <input placeholder="Username" className="Profile__text" />
          <input placeholder="About" className="Profile__text" />
          <input placeholder="Hobby" className="Profile__text" />
          <input placeholder="Contact Number" className="Profile__text" />
          <input placeholder="Email" className="Profile__text" />
          <input placeholder="Website" className="Profile__text" />
          <Button variant="contained" color="primary" >
            Update
          </Button>
          </form>
    
        </div>
      </div>
    </>
  );
}
