// import { Modal } from "@material-ui/core";
// import AlbumBouttn from '../../Component/Album/AlbumBouttn'
import React from "react";
import "./Album.css";
import Images from "./Images";
// import ImageGrid from "./ImageGrid";
// import Modal from "./Modal";
// import Title from "./Title";
import UploadForm from "./UploadForm";
export default function Album() {
  document.title = "Album";
  document.body.style.backgroundColor = "white";
  return (
    <div className="Album">
  
      <div className="Album__main">
      <UploadForm />
      <Images/>

      </div>
     
    </div>
  );
}
