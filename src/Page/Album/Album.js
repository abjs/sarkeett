import React from "react";
import "./Album.css";
import Title from "./Title";
import UploadForm from "./UploadForm";
export default function Album() {
  // document.body.style.backgroundColor = "rgb(193, 108, 172)";
  // document.body.style.backgroundColor = none;
  document.title = "Album";
  return (
    <div className="Album">
      <Title />
      <UploadForm />
    </div>
  );
}
