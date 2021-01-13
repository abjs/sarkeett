import React from "react";
import "./Album.css";
// import ImageGrid from "./ImageGrid";
import Images from "./Images";
import UploadForm from "./UploadForm";
export default function Album() {
  document.title = "Album";
  document.body.style.backgroundColor = "white";
  return (
    <div className="Album">
      <div id="album__uplodeForam" className="Album__uploded">

      <UploadForm/> 
      </div>
  
      <div className="Album__main">

             <Images/>
             {/* <ImageGrid/> */}

      </div>
     
    </div>
  );
}
