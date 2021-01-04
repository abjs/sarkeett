import { Avatar, Badge, Button, IconButton } from "@material-ui/core";
// import CreateIcon from '@material-ui/icons/Create';
import React from "react";
import Header1 from "../../Component/Header/Header";
import "./Profile.css";
import { PhotoCamera } from "@material-ui/icons";
// import { withStyles } from "@material-ui/core/styles";
// const SmallAvatar = withStyles((theme) => ({
//   root: {
//     width: 22,
//     height: 22,
//     border: `1px solid ${theme.palette.background.paper}`,
//   },
// }))(Avatar);

export default function Profile() {
  document.body.style.backgroundColor = "#444950";

  return (
    <>
      <div>
        <Header1 titile="Profile" />
      </div>
      <div className="Profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <>
                <input accept="image/*" className="Profile__Avatar_input" id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                  </label>
                </>
              }
            >
              <Avatar
                // className="Profile__Avatar__main"
                style={{ height: '80px', width: '80px' }}
                alt="profile pic"
                src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/89942220_2385737541646997_3575095416724652032_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=vgsb74Ae3FkAX-6PJvb&_nc_ht=scontent-maa2-2.xx&oh=c37c3d971a66b5c49a45e60867ab7ca5&oe=6012660E"
              />
            </Badge>
          </div>
        </div>
        <br />
        <div className="profile-input">
          <form action="#">
            <input placeholder="Username" className="Profile__text" />
            <input placeholder="About" className="Profile__text" />
            <input placeholder="Hobby" className="Profile__text" />
            <input placeholder="Contact Number" className="Profile__text" />
            <input placeholder="Email" className="Profile__text" />
            <input placeholder="Website" className="Profile__text" />
            <div className="profile__button">
              <Button variant="contained" color="primary">
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
