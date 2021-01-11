import React from 'react'
import './AlbumBox.css'
export default function AlbumBox({bgImage}) {
    const  backgroundImage = {
       
        backgroundImage: 'url("'+bgImage+'")',
    }
    return (

 


        <div className="StoryBox" style={backgroundImage}>
        </div>
    )
}
