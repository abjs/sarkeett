import React, { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
// import Carousel from "react-elastic-carousel";
import AlbumBox from "../../Component/Album/AlbumBox";
import useFirestore from "./useFirestore";
import "./Images.css";
// import AlbumLargImg from "../../Component/Album/AlbumLargImg";

const Images = () => {
  const { docs } = useFirestore("images");
  const [togg, settogg] = useState(false);
  const [alb, setalb] = useState(true);
  const [url, seturl] = useState("");
  // const [id, setid] = useState("");
  const [index, setindex] = useState(0);

  const backgroundImage = {
    backgroundImage: 'url("' + url + '")',
  };

  const Imagemovetoright = (e) => {
    e.preventDefault();
    if (index === docs.length - 1) {
      setindex(0);
      seturl(docs[0].url);
    } else {
      seturl(docs[index + 1].url);
      setindex(index + 1);
    }
  };
  const Imagemovetoleft = (e) => {
    e.preventDefault();

    if (index === 0) {
      seturl(docs[docs.length - 1].url);
      setindex(docs.length - 1);
    } else {
      seturl(docs[index - 1].url);
      setindex(index - 1);
    }
  };
  const ImageClose = (e) => {
    e.preventDefault();

    setalb(true);
    settogg(false);
    document.getElementById("album__uplodeForam").style.display = "block";
  };

  console.log(docs.length);
  console.log("index", index);

  const LargeImg = (
    <div className="Images__app_image">

      <div className="Image__app__img__left">

        <IconButton onClick={Imagemovetoleft}>
      <div className="IconButton__img">
          <SkipPreviousIcon   style={{ fontSize: 40 }}/>
      </div>
        </IconButton>

        <IconButton onClick={ImageClose}>
      <div className="IconButton__close">
          <CloseIcon   style={{ fontSize: 40 }} />
      </div>
        </IconButton>
      </div>

      <div className="Image__app__img__midd">
        <div className="Image__app__img" style={backgroundImage} />
      </div>
      <div className="Image__app__img__right">
        <IconButton onClick={ImageClose}>
        <div className="IconButton__close">

          <CloseIcon   style={{ fontSize: 40 }}/>
        </div>
        </IconButton>

        <IconButton onClick={Imagemovetoright}>
        <div className="IconButton__img">

          <SkipNextIcon   style={{ fontSize: 40 }}/>
         </div>
        </IconButton>
      </div>
    </div>
  );
  if (togg) {
    return LargeImg;
  }
  return (
    <>
      {/* {togg && <LargeImg />} */}

      <div id="Images__app" className="Images__app">
        <div>
          {alb &&
            docs.map((doc, i) => (
              <div
                onClick={() => {
                  setindex(i);

                  console.log("i", i);

                  seturl(docs[i].url);
                  settogg(true);
                  setalb(false);
                  document.getElementById("album__uplodeForam").style.display =
                    "none";

                  // document.getElementById('Images__app').style.display="none"
                }}
                key={doc.id}
                className="Images__imgs"
              >
                <AlbumBox bgImage={doc.url} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Images;
