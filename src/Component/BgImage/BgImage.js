import React from 'react'
import './BgImage.css'
export default function BgImage({Img}) {
    return (
        <div className="Bg_Img">
            <img src={Img} alt="Image"/>
        </div>
    )
}
