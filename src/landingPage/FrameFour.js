import React, {useState, useEffect} from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import "./FrameOne.css"
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";


function FrameFour() {
  const [{}, dispatch] = useStateValue();
const question = "Who should maintain the content of the website ?";
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
            <p>Who should maintain the content of the website?</p>
            <form  className="pt-5 p-lg-5 form"  value={answer} onChange={(e) => serviceChange(e)}>
                <div className="frame-form d-flex flex-wrap justify-content-center">
                   <div className=" form-group col-6">
                     <input type="radio" id="personal" name="maintainace" value="Agency"/>
                     <label for="personal">Agency</label>
                   </div>
                   <div className=" form-group col-6 left">
                      <input type="radio" id="ecommerce" name="maintainace" value="Independent"/>
                   <label for="ecommerce">Independent</label>
                   </div>
               </div>
               <div className="frame-form d-flex flex-wrap justify-content-center pt-5">
                 <div className=" form-group col-12">
                    <input type="radio" id="company" name="maintainace" value="I do not know"/>
                    <label for="company">I do not know</label>
                 </div>
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>40%</p>
            <Progressbar className="progress" bgcolor="#F29200" progress='40'  height={9} / >
            <div className="navigate">
             <Link to="/framethree">
               <img className="pre" src={Previous} alt="pre" />
             </Link>
             <Link to="/framefive">
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

export default FrameFour
