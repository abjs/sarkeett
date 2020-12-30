import React from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import './Feeds.css'
export default function Feeds() {
  document.title ="Feeds"
  return (
    <div className='Feeds'>
      <div>
        <Header titile="Feeds" />
      </div>
      <div className="Footer-end">
            <Footer />
      </div>
    </div>
  );
}
