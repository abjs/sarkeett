import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import React from "react";

export default function Explore() {
  document.title ="Explore"
  document.body.style.backgroundColor = "black"

  return (
    <div>
      <div>
        <Header titile="Explore" />
      </div>
      <div className="Footer-end">
        <Footer />
      </div>
    </div>
  );
}
