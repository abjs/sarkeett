// import { Modal } from "@material-ui/core";
import React from "react";
import "./Album.css";
import IMG from "./IMG";
// import ImageGrid from "./ImageGrid";
// import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";
export default function Album() {
  // document.body.style.backgroundColor = "rgb(193, 108, 172)";
  // document.body.style.backgroundColor = none;
  // const [selectedImg, setSelectedImg] = useState(null);

  document.title = "Album";
  return (
    <div className="Album">
      <Title/>

     


      <div className="Album__main">
      <IMG/>
      </div>
      {/* <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
    </div>
  );
}
