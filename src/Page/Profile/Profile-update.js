import { Avatar, Badge, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Profile-update.css";
import { PhotoCamera } from "@material-ui/icons";
import { AuthContext } from "../../helper/Auth";
import app from "../../helper/firebase"
// import firebase from 'firebase/app'
const db = app.firestore()

export default function Update_profile() {


  document.body.style.backgroundColor = "#444950";
  document.title = "Update Profile";
  const [update, setUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState({
    username: '',
    about: '',
    hobby: '',
    number: '',
    email: '',
    website: '',
    userpic:''
  });
  // .collection('myCollection')
  // .document(documentId)
  // .collection('post')
  // .snapshots()

  // const [uid, setUid] = useState("")
  // useEffect(() => {
  //     setUid(currentUser.uid)

  // }, [currentUser])
  // console.log(uid)
  useEffect(() => {
    db.collection('users').doc(currentUser.uid).onSnapshot(e => {
      // setPosts(snapshot.doc(doc => ({ id: doc.id, data: doc.data()
      //  console.log(e.data())
      // })));
      setData({
        username: e.data().username,
        about: e.data().about,
        hobby: e.data().hobby,
        number: e.data().number,
        email: e.data().email,
        website: e.data().website,
        userpic:e.data().userpic
      })
    setUpdate(false);

    })
  }, [currentUser.uid,update])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
            <input placeholder="Full Name" type="text" name="username" value={data.username} onChange={handleChange} className="Update_profile__text" />
            <input placeholder="About" type="text" name="about" value={data.about} onChange={handleChange} className="Update_profile__text" />
            <input placeholder="Hobby" type="text" name="hobby" value={data.hobby} onChange={handleChange} className="Update_profile__text" />
            <input placeholder="Contact Number" pattern="[0-9]" type="text" name="number" value={data.number} onChange={handleChange} className="Update_profile__text" />
            <input disabled placeholder="Email" name="email" value={data.email} className="Update_profile__text" />
            <input placeholder="Website" type="text" name="website" value={data.website} onChange={handleChange} className="Update_profile__text" />
            
            <button type="submit" >
              Update
            </button>
            
          </form>
        </div>
      </div>

    </>
  );
}
