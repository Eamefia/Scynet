import React from 'react';
import "./FrameOne.css";
import Group from "./icons/completed.png";
import Logo from "./Scynet-logo.png";
function FrameEleven() {
    return (
        <div className="frame">
        <div className="frame__one">
           <h2 className="thank__you">THANK YOU VERY MUCH</h2>
         <div className="frame__op">
            <img className="top frame__op" src={Group} alt="vector" />
         </div>
         <div className="load__txt">
            <p>We have an email. Please check your inbox now. Our team will respond to your request within the next 24 hours.</p>
            <p>Be sure to check your mail regularly or keep your phone close.</p>
            <div className="homepage">
              <p>Go to homepage</p>
            </div>
         </div>
         </div>
         <footer className="footer">
           <p>Once all your answers have been recorded, we will send you a response to your email or phone call</p>
           <div className="footer__logo">
             <img className="scynett__logo" src={Logo} alt="Scynett" />
             <strong>SCYNETT</strong>
           </div>
         </footer>
        </div>
    )
}

export default FrameEleven
