import React, { useEffect, useState } from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import { Link } from "react-router-dom";
import "./FrameOne.css"
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";

function FrameOne() {
   const [{}, dispatch] = useStateValue();
   const projectQuestion = "What type of Project do you want to undertake?";
   const [projetType, setProjectType] =  useState("");


    function projectTypeChange(e) {
         setProjectType(e.target.value);
      }

      useEffect(() => {
      if (projetType !== "") {
            dispatch({
               type: 'ADD_T0_FRAMEONE',
               item: {
                  question: projectQuestion,
                  answer: projetType
               }
            })
         }
      }, [dispatch, projetType])
   console.log(projetType)
    return (
        <div className="frame">
        <div className="frame__one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__items">
            <p>What type of Project do you want to undertake?</p>
            <form id="frame1-form"  className="pt-5 p-lg-5 form" value={projetType} onChange={(e) => projectTypeChange(e)}>
                <div className="frame-form d-flex flex-wrap justify-content-center">
                   <div className="form-group col-6">
                    <input type="radio" id="personal" name="website" value="Personal Website"/>
                    <label for="personal">Personal Website</label>
                   </div>
                      <div className="form-group col-6 left">
                      <input type="radio" id="ecommerce" name="website" value="E-commerce Website"/> 
                   <label for="ecommerce">E-commece Website</label>
                      </div>
                      <div className="form-group col-6">
                         <input type="radio" id="company" name="website" value="Company Website" />
                         <label for="company">Company Website</label>
                      </div>
                      <div className="form-group col-6 left">
                         <input type="radio" id="generic" name="website" value="I do not know" />
                         <label className="generic" for="generic">I do not know</label>
                      </div>
               </div>
               <div className="d-flex pt-4 justify-content-center">
                 
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>10%</p>
               <Progressbar bgcolor="#F29200" progress='10'  height={9} / >
            <div className="navigate">
               <Link className="pre" to="/">
                  <img src={Previous} alt="pre" />
               </Link>
               <Link className="next" to="/frametwo">
               <img src={Next} alt="pre" />
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

export default FrameOne
