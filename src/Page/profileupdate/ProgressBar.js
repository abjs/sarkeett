import React, { useEffect } from "react";
import useStorage from "./useStorage";
// import { AuthContext } from "../../helper/Auth";
// import { timestamp } from '../../helper/firebase';
// import app from "../../helper/firebase"
// const db = app.firestore()
const ProgressBar = ({ file, setFile }) => {
  const { url } = useStorage(file);
  // console.log(progress)
  // console.log(progress,url)
  // const { currentUser } = useContext(AuthContext);
  // const users = db.collection('users').doc(currentUser.uid)
  useEffect(() => {
    if (url) {
      // const userpic = url;
      // const updatedAt=timestamp();
      // users.update({userpic ,updatedAt})
      setFile(null);
    }
  }, [url, setFile]);

  return <></>;
};

export default ProgressBar;
