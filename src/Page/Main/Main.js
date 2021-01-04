import React from 'react'
import './Main.css'
import BgImage from '../../Component/BgImage/BgImage'
import Image from './bg_home.png'
export default function Main() {
    document.body.style.backgroundColor = "black"
    return (
        <div className="Main">
            <BgImage Img={Image}/>
        </div>
    )
}
