import React from 'react'
import './AlbumLargImg.css'
export default function AlbumLargImg({bgImage}) {
  const  backgroundImage = {
       
    backgroundImage: 'url("'+bgImage+'")',
}
    return (
      <div className="AlbumLargImgs">
        
           <div className="AlbumLargImgsBg" style={backgroundImage}>
           </div>
      </div>  
       
        
    )
}
