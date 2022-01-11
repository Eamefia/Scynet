import React, {useState, useEffect} from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import "./FrameOne.css"
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";

function FrameSix() {
  const [{}, dispatch] = useStateValue();
  const question = "Is there a domain and hosting package available ?";
  const [answer, setAnswerType] = useState("");
   function serviceChange(e) {
    setAnswerType(e.target.value);
    }
    useEffect(() => {
      if (answer !== "") {
        dispatch({
          type: 'ADD_T0_FRAMEONE',
          item: {
            question: question,
            answer: answer,
          }
        })
      }
    }, [dispatch, answer])
    return (
        <div className="frame">
        <div className="frame__one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__items">
            <p>Is there a domain and hosting package available?</p>
            <form  className="pt-5 p-lg-5 form" value={answer} onChange={(e) => serviceChange(e)}>
                <div className="frame-form d-flex flex-wrap justify-content-center">
                   <div className=" form-group col-6">
                     <input type="radio" id="personal" name="domain_hosting" value="Yes"/>
                     <label for="personal">Yes</label>
                   </div>
                   <div className=" form-group col-6 left">
                      <input type="radio" id="ecommerce" name="domain_hosting" value="No"/>
                   <label for="ecommerce">No</label>
                   </div>
               </div>
               <div className="frame-form d-flex flex-wrap justify-content-center pt-5">
                 <div className=" form-group col-12">
                    <input type="radio" id="company" name="domain_hosting" value="I do not know"/>
                    <label for="company">I do not know</label>
                 </div>
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>60%</p>
            <Progressbar className="progress" bgcolor="#F29200" progress='60'  height={9} / >
            <div className="navigate">
              <Link to="/framefive">
                <img className="pre" src={Previous} alt="pre" />
              </Link>
              <Link to="/frameseven">
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

export default FrameSix
