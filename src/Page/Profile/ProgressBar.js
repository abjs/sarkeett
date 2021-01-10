import React, { useContext, useEffect } from 'react';
import useStorage from '../Album/hooks/useStorage';
import { AuthContext } from "../../helper/Auth";
import firebase from 'firebase/app'
import app from "../../helper/firebase"
const db = app.firestore()
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress,url)
  const { currentUser } = useContext(AuthContext);
  const users = db.collection('users').doc(currentUser.uid)

  useEffect(() => {
    if (url) {
      users.update({
          userpic: url,
          updatedAt:firebase.firestore.FieldValue.serverTimestamp(),
        })
      
      
      setFile(null);
    }
  }, [url, users,setFile]);

  return (
    <></>
  );
} 

export default ProgressBar;