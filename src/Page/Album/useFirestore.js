import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from '../../helper/firebase';
import { AuthContext } from "../../helper/Auth";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  useEffect(() => {
    const unsub = projectFirestore.collection("album").doc(`${uid}`).collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection,uid]);

  return { docs };
}

export default useFirestore;