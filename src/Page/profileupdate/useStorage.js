import { useState, useEffect, useContext } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../helper/firebase";
import { AuthContext } from "../../helper/Auth";
const useStorage = (file) => {
  const { currentUser } = useContext(AuthContext);

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  // const [uid, setuid] = useState(null);
  const uid = currentUser.uid;
  // const users = projectFirestore.collection('users').doc()

  // console.log(uid)
  // console.log(uid,currentUser)
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore
      .collection("dp")
      .doc(`${uid}`)
      .collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt,userid:uid });
        setUrl(url);
      }
    );
  }, [file, currentUser, uid]);

  return { progress, url, error };
};

export default useStorage;
