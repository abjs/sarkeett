import React from 'react'
import './AlbumLargImg.css'
export default function AlbumLargImg({bgImage}) {
//   const  backgroundImage = {
       
//     backgroundImage: 'url("'+bgImage+'")',
// }
    return (
      <div className="AlbumLargImgs">
        <img src={bgImage} alt="img"/>
      </div>  
       
        
    )
}
