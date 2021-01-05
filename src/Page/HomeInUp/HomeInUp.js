import React from 'react'
import background_image from './background.png'
import { useHistory } from 'react-router-dom';
import mob from './mob.png'
import './HomeInUp.css'
export default function HomeInUp() {
  document.title ="Home"
  document.body.style.backgroundColor = "black"
  const history = useHistory();
  const gotoLogin = () =>{
      console.log("Hello")
      history.push("/login");
  }
    return (
        <div className="HomeInUp">
            <div className="HomeInUp__NavBar">
                <div className="HomeInUp__NavBar__left">
                    <img src={mob} alt="Logo" className="HomeInUp__logo_top"/>
                    <h3>SARKEETT</h3>
                </div>

                <div className="HomeInUp__NavBar__rite">  
                    <button onClick={gotoLogin}>
                        Sign In / Sign up

                        
                        </button>
                 
                </div>

            </div>
            <div className="img__pc">
                <img src={background_image} alt=""/>
            </div>
            <div className="img__mobile">
                <img src={mob} alt=""/>
            </div>
      
        </div>
    )
}

