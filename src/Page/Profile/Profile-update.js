import { Avatar, Badge, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Profile-update.css";
import { PhotoCamera } from "@material-ui/icons";
import { AuthContext } from "../../helper/Auth";
import app from "../../helper/firebase"
import firebase from 'firebase/app'
const db = app.firestore()
export default function Update_profile() {
  document.body.style.backgroundColor = "#444950";
  document.title = "Update Profile";
  const [update, setUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const users = db.collection('users').doc(currentUser.uid)
  const [data, setData] = useState({
    username: '',
    about: '',
    hobby: '',
    number: '',
    email: '',
    website: '',
    userpic: ''
  });


  useEffect(() => {
    db.collection('users').doc(currentUser.uid).onSnapshot(e => {
      setData({
        username: e.data().username,
        about: e.data().about,
        hobby: e.data().hobby,
        number: e.data().number,
        email: e.data().email,
        website: e.data().website,
        userpic: e.data().userpic
      })
      setUpdate(false);

    })
  }, [currentUser.uid, update])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
  
   users.update({
     username:data.username,
     about: data.about,
     hobby: data.hobby,
     number: data.number,
     email: data.email,
     website: data.website,
     userpic: data.userpic,
     updatedAt:firebase.firestore.FieldValue.serverTimestamp(),

   })
   setData({
    username: '',
    about: '',
    hobby: '',
    number: '',
    email: '',
    website: '',
    userpic: ''
  })
    setUpdate(true);
  }


  return (
    <>
      <Header titile="Update profile" />

      <div className="Update_profile">
        <div className="Update_profile__avatar">
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <>
                <input accept="image/*" className="Update_profile__Avatar_input" id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </>
            }
          >
            <Avatar
              // className="Update_profile__Avatar__main"
              style={{ height: '100px', width: '100px' }}
              alt="Update_profile pic"
              src={data.userpic}
            />
          </Badge>
        </div>
        
        <div className="Update_profile-input">

          <form onSubmit={handleSubmit} noValidate>
            
            <div className="Update_profile_form">
            <label for="name">👤 Name</label>
            <input id="name" placeholder="👤 Full Name" type="text" name="username" value={data.username} onChange={handleChange} className="Update_profile__text" />
            </div>
            <div className="Update_profile_form">
            <label for="about">📕 About</label>
            <input id="about" type="text" placeholder="📕 About" type="text" name="about" value={data.about} onChange={handleChange} className="Update_profile__text" />
            </div>
            <div className="Update_profile_form">
            <label for="hobby">👞 Hobby</label>
            <input id="hobby" placeholder="👞 Hobby" type="text" name="hobby" value={data.hobby} onChange={handleChange} className="Update_profile__text" />
            </div>
            <div className="Update_profile_form">
            <label for="number">📞 Mobile Number</label>
            <input id="number" placeholder="📞 Mobile Number" pattern="[0-9]" type="text" name="number" value={data.number} onChange={handleChange} className="Update_profile__text" />
            </div>
            <div className="Update_profile_form">
            <label for="email">📧 Email</label>
            <input id="email" disabled placeholder="Email" name="email" value={data.email} className="Update_profile__text" />
            </div>
            <div className="Update_profile_form">
            <label for="website" for="name">🌐 Website</label>
            <input id="website" placeholder="🌐 website" type="text" name="website" value={data.website} onChange={handleChange} className="Update_profile__text" />
            </div>

            <button type="submit" >
              Update
            </button>

          </form>
        </div>
      </div>

    </>
  );
}
