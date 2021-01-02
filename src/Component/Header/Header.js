import React from 'react'
import './Header.css';
import logo from './imge/logo.png'
import HomeIcon from '@material-ui/icons/Home';
export default function Header({titile}) {
    return (
        <div className="Header">
            <div className="Header-items"> 
                <img src={logo} alt="logo"/>
            </div>
            <div > <h2 style={{ color: "#39FF14" ,marginLeft: "-80px" }}>{titile}</h2></div>
            <div className="Header-items">
            <HomeIcon fontSize="large" style={{ color: "#39FF14" }} />
            </div>
        </div>
    )
}