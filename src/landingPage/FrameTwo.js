import React, { useState, useEffect } from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import "./FrameOne.css"
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";


function FrameTwo() {
  const [{}, dispatch] = useStateValue();
  const serviceQtn = "What should be done?";
  const [serviceType, setServiceType] = useState("");
   function serviceChange(e) {
    setServiceType(e.target.value);
    }

    useEffect(() => {
      if (serviceType !== "") {
        dispatch({
          type: 'ADD_T0_FRAMEONE',
          item: {
            question: serviceQtn,
            answer: serviceType,
          }
        })
      }
    }, [dispatch, serviceType])


  return (
        <div className="frame">
        <div className="frame__one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__items">
            <p>What should be done?</p>
            <form  className="pt-5 p-lg-5 form" value={serviceType} onChange={(e) => serviceChange(e)}>
                <div className="frame-form d-flex flex-wrap justify-content-center">
                   <div className=" form-group col-6">
                    <input type="radio" id="personal" name="service" value="Create new Website"/>
                    <label for="personal">Create new Website</label>
                   </div>
                   <div className=" form-group col-6 left">
                      <input type="radio" id="ecommerce" name="service" value="Update Existing Website"/>
                   <label for="ecommerce">Update Existing Website</label>
                   </div>
               </div>
               <div className="frame-form d-flex flex-wrap justify-content-center left">
                 <div className=" form-group col-12">
                    <input type="radio" id="comp" name="service" value="I do not know"/>
                    <label for="company">I do not know</label>
                 </div>
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>20%</p>
              <Progressbar className="progress" bgcolor="#F29200" progress='20'  height={9} / >
            <div className="navigate">
            <Link to="/">
              <img className="pre" src={Previous} alt="pre" />
            </Link>
            <Link to="/framethree">
              <img className="next" src={Next} alt="next" />
            </Link>
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

export default FrameTwo
