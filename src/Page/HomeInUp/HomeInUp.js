import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import background_image from './background.png'
import './HomeInUp.css'
export default function HomeInUp() {
    document.title ="Home"
    return (
        <div className="HomeInUp">
            <NavBar/>
            <div className="background">
                <div className="bg">
                     <img src={background_image} alt="Background" />
                </div>
            </div>
        </div>
    )
}


