import React from "react";
import "./Album.css";
import Images from "./Images";
import UploadForm from "./UploadForm";
export default function Album() {
  document.title = "Album";
  document.body.style.backgroundColor = "white";
  return (
    <div className="Album">
      <div className="Album__uploded">

      <UploadForm/> 
      </div>
  
      <div className="Album__main">
      <Images/>

      </div>
     
    </div>
  );
}
