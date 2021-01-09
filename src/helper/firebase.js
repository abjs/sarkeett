import firebase from 'firebase/app'  
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore';
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain ,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
}); 

// const auth = firebase.auth();
// const db = firebase.firestore();

export default app;

// export{auth, db}