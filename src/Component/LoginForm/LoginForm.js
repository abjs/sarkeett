import React from 'react'
import './LoginForm.css'
import logo from './img/logo.png'
export default function LoginForm() {
    return (
        <div className="LoginForm">
            <div className="img">
            <img src={logo} alt="" />
            </div>
            <div className="Mess">
            It is not just a media. The key to learn, listen, engage and build relationships.
            <b>Come let us explore the world TOGETHER.</b>
            </div>
        </div>
    )
}
