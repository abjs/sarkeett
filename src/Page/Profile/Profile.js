import { Avatar, Badge, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Profile.css";
import { PhotoCamera } from "@material-ui/icons";
import app from "../../helper/firebase"
import firebase from 'firebase'
import { AuthContext } from "../../helper/Auth";
const db = app.firestore()



export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  const [userinfo, setUserinfo] = useState([])
  const [data, setData] = useState({
    username: '',
    about: '',
    hobby: '',
    number: '',
    email: 'itsmeabjs@gmail.com',
    website:''
  });
  


  document.body.style.backgroundColor = "#444950";
  

  const handleChange = (e)=>{
    const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      });
  
  }

  const handleSubmit = (e)=>{
   
    e.preventDefault();
    

    setData({
      username: '',
      about: '',
      hobby: '',
      number: '',
      email: 'itsmeabjs@gmail.com',
      website:''
    })
  }



  useEffect(() => {
    db.collection('users').onSnapshot(s => {
      setUserinfo(s.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    }
    
    )
  }, [])




  


  return (
    <>
      <Header titile="Profile" />

      <div className="Profile">
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
        <div className="profile-input">
          <form onSubmit={handleSubmit} noValidate>
            <input placeholder="Full Name"   type="text" name="username" value={data.username}  onChange={handleChange}  className="Profile__text" />
            <input placeholder="About"  type="text" name="about"  value={data.about}  onChange={handleChange} className="Profile__text" />
            <input placeholder="Hobby"  type="text" name="hobby"  value={data.hobby}  onChange={handleChange} className="Profile__text" />
            <input placeholder="Contact Number"  pattern="[0-9]" type="text"  name="number" value={data.number}  onChange={handleChange} className="Profile__text" />
            <input disabled placeholder="Email" name="email"  value={data.email}   className="Profile__text" />
            <input placeholder="Website"   type="text"name="website"  value={data.website}  onChange={handleChange} className="Profile__text" />
            <button type="submit" className="Profile__button">
              Update
            </button>
          </form>
        </div>
      </div>

    </>
  );
}
