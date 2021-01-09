import React from 'react'
import './Test.css'
import app from "../../helper/firebase"
const db = app.firestore()
export default function Test() {
    var user = app.auth().currentUser;
    const user_collection = db.collection("/users");
    console.log(user_collection)
    return (
        <div className="test">
            <h2>{user.displayName}</h2>
            <h2>{user.email}</h2>
            <img src={user.photoURL} alt="UserImage"/>
        </div>
    )
}
