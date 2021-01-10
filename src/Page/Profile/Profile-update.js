import { Avatar, Badge } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Profile-update.css";
import { AuthContext } from "../../helper/Auth";
import useStorage from "./useStorage";
import { PhotoCamera } from "@material-ui/icons";

import app from "../../helper/firebase";
import firebase from "firebase/app";
const db = app.firestore();

export default function Update_profile() {
  document.body.style.backgroundColor = "#444950";
  document.title = "Update Profile";
  const [update, setUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const types = ["image/png", "image/jpeg", "image/gif", "image/webp"];
  const [url, seturl] = useState("");

  const users = db.collection("users").doc(currentUser.uid);
  const [data, setData] = useState({
    username: "",
    about: "",
    hobby: "",
    number: "",
    email: "",
    website: "",
    userpic: "",
  });

  const handleChange_dp = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  if (error) alert(error);
  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .onSnapshot((e) => {
        setData({
          username: e.data().username,
          about: e.data().about,
          hobby: e.data().hobby,
          number: e.data().number,
          email: e.data().email,
          website: e.data().website,
          userpic: e.data().userpic,
        });
        setUpdate(false);
      });
  }, [currentUser.uid, update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();

    users.update({
      username: data.username,
      about: data.about,
      hobby: data.hobby,
      number: data.number,
      email: data.email,
      website: data.website,
      userpic: data.userpic,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // currentUser.updateProfile({
    //   photoURL:url
    //   })
    if (currentUser.photoURL !== data.userpic) {
      currentUser.updateProfile({
        photoURL: data.userpic,
      });
    }

    if (currentUser.displayName !== data.username) {
      currentUser.updateProfile({
        displayName: data.username,
      });
    }

    // if (currentUser.photoURL !== data.userpic){
    //      currentUser.updateProfile({
    //      photoURL:url
    //   })
    // }

    setData({
      username: "",
      about: "",
      hobby: "",
      number: "",
      email: "",
      website: "",
      userpic: "",
    });
    setUpdate(true);
  };

  function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);
    console.log(progress);
    useEffect(() => {
      if (url) {
        seturl(url);
        currentUser.updateProfile({
          photoURL: url,
        });
        users.update({
          userpic: url,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // const userpic = url;
        // const updatedAt=timestamp();
        // users.update({userpic ,updatedAt})
        setFile(null);
      }
    }, [url, setFile]);
    return <div></div>;
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
                <form>
                  <label>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      onChange={handleChange_dp}
                    />
                    <PhotoCamera />
                  </label>
                </form>
                {file && <ProgressBar file={file} setFile={setFile} />}
              </>
            }
          >
            <Avatar
              // className="Update_profile__Avatar__main"
              style={{ height: "100px", width: "100px" }}
              alt="Update_profile pic"
              // src={data.userpic}
              src={data.userpic}
            />
          </Badge>
        </div>

        <div className="Update_profile-input">
          <form onSubmit={handleSubmit} noValidate>
            <div className="Update_profile_form">
              <label htmlFor="name">👤 Name</label>
              <input
                id="name"
                placeholder="👤 Full Name"
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                className="Update_profile__text"
              />
            </div>
            <div className="Update_profile_form">
              <label htmlFor="about">📕 About</label>
              <input
                id="about"
                type="text"
                placeholder="📕 About"
                name="about"
                value={data.about}
                onChange={handleChange}
                className="Update_profile__text"
              />
            </div>
            <div className="Update_profile_form">
              <label htmlFor="hobby">👞 Hobby</label>
              <input
                id="hobby"
                placeholder="👞 Hobby"
                type="text"
                name="hobby"
                value={data.hobby}
                onChange={handleChange}
                className="Update_profile__text"
              />
            </div>
            <div className="Update_profile_form">
              <label htmlFor="number">📞 Mobile Number</label>
              <input
                id="number"
                placeholder="📞 Mobile Number"
                pattern="[0-9]"
                type="text"
                name="number"
                value={data.number}
                onChange={handleChange}
                className="Update_profile__text"
              />
            </div>
            <div className="Update_profile_form">
              <label htmlFor="email">📧 Email</label>
              <input
                id="email"
                disabled
                placeholder="Email"
                name="email"
                value={data.email}
                className="Update_profile__text"
              />
            </div>
            <div className="Update_profile_form">
              <label htmlFor="website">🌐 Website</label>
              <input
                id="website"
                placeholder="🌐 website"
                type="text"
                name="website"
                value={data.website}
                onChange={handleChange}
                className="Update_profile__text"
              />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
