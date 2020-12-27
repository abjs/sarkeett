import React from 'react'
import './Header.css'
import logo from './img/LOGO1.png'
export default function Header() {
    return (
        <div >
            < div className="Header"/>
            <div >
                <img className="img" src={logo}
                    alt="logo"/>
            </div>
             <div className="height">
                <h3>SARKEETT</h3>
            </div>
            <div className="button">
                <button>Sign In / Sign up</button>
            </div>
        </div>
    )
}
