import React from 'react'
import "./FrameOne.css";
import Group from "./icons/Group.png";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Logo from "./Scynet-logo.png";
 function FrameNine() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 1000);
    return redirectNow ? (
      <Redirect to="/ten" />
    ):(
        <div className="frame">
        <div className="frame__one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__op">
            <img className="top frame__opt" src={Group} alt="vector" />
         </div>
         <div className="load__text">
            <p>Please wait a moment</p>
            <p>We are generating your quote</p>
         </div>
         </div>
         <footer className="footer">
           <p>Once all your answers have been recorded, we will send you a response to
           your email or phone call</p>
           <div className="footer__logo">
            <img className="scynett__logo" src={Logo} alt="Scynett" />
           </div>
         </footer>
        </div>
    )

}

export default FrameNine
