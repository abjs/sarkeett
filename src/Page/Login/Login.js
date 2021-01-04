import { TextField } from '@material-ui/core'
import React from 'react'
import './Login.css'
import logo from "./logo.png"
export default function Login() {
    return (
        <div className="Login__App">
            <div className="Login__left">
                <div className="Login__left__img">
                    <img src={logo} alt="Logo"/>
                </div> 
                <div className="Login__left__test">
                    <h1>Come let us explore the world TOGETHER.</h1>
                    <p>
                         It is not just a media. The key to learn, listen, engage and build relationships.
                    </p>
                </div>  
            </div>
            <div className="Login__right">
            <input type="text"/>
            </div>
        </div>
    )
}
 
