import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
// import Carousel from "react-elastic-carousel";
import AlbumBox from '../../Component/Album/AlbumBox';
import useFirestore from './useFirestore';
import './Images.css'
import AlbumLargImg from '../../Component/Album/AlbumLargImg';



const Images = () => {

  
  const {docs } = useFirestore('images');
  const [togg, settogg] = useState(false);
  const [alb, setalb] = useState(true);
  const [url, seturl] = useState("")

  return (
    <div className="Images__app">

<OutsideClickHandler onOutsideClick={()=>{
  setalb(true);
  settogg(false);
}}>
{alb &&docs.map(doc =>
             <div onClick={()=>{
               seturl(doc.url)
               settogg(true)
               setalb(false)
             }} key={doc.id} data-index={doc.id} >
             <AlbumBox bgImage={doc.url}/>
             </div>
           )
}
</OutsideClickHandler>
    {togg && <AlbumLargImg bgImage={url}/>}
      
    </div>
  )
}

export default Images;


 