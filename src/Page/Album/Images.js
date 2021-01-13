import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
// import Carousel from "react-elastic-carousel";
import AlbumBox from "../../Component/Album/AlbumBox";
import useFirestore from "./useFirestore";
import "./Images.css";
import AlbumLargImg from "../../Component/Album/AlbumLargImg";

const Images = () => {
  const { docs } = useFirestore("images");
  const [togg, settogg] = useState(false);
  const [alb, setalb] = useState(true);
  const [url, seturl] = useState("");
  const  backgroundImage = {
       
    backgroundImage: 'url("'+url+'")',
}
  return (
    <>

      <div id='Images__app' className="Images__app">

      {togg && <div className="Image__app__img" style={backgroundImage} />}

        <OutsideClickHandler className="teat"
          onOutsideClick={() => {
            setalb(true);
            settogg(false);
            document.getElementById('album__uplodeForam').style.display="block"
            // document.getElementById('Images__app').style.display="block"
          }}
        >
          {alb &&
            docs.map((doc) => (
         
                <div
                onClick={() => {
                  seturl(doc.url);
                  settogg(true);
                  setalb(false);
                  
                  document.getElementById('album__uplodeForam').style.display="none"
                  // document.getElementById('Images__app').style.display="none"
                }}
                key={doc.id}
                 className="Images__imgs">
                  <AlbumBox bgImage={doc.url} />
                </div>
            
            ))}
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default Images;
