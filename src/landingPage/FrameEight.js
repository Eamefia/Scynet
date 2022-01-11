import React, {useState, useEffect} from 'react';
import Next from "./icons/next.png";
import Previous from "./icons/previouse.png";
import "./FrameOne.css"
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar';
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";

function FrameEight() {
  const [{}, dispatch] = useStateValue();
  const question = "When should the website be completed ?";
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
            <p>When should the website be completed?</p>
            <form  className="pt-5 p-lg-5 form" value={answer} onChange={(e) => serviceChange(e)}>
                <div className="frame-form d-flex flex-wrap justify-content-center">
                   <div className="form-group col-6">
                    <input type="radio" id="personal" name="completing" value="As soon as possible"/>
                    <label for="personal">As soon as possible</label>
                   </div>
                   <div className="form-group col-6 left">
                      <input type="radio" id="six_months" name="completing" value="In 2 to 6 months"/>
                      <label for="six_months">In 2 to 6 months</label>
                   </div>
                 <div className="form-group col-6 pt-5 statement ">
                    <input type="radio" id="months" name="completing" value="In more than 6 months"/>
                    <label for="months">In more than 6 months</label>
                 </div>
                 <div  className="form-group col-6 left pt-5">
                    <input type="radio" id="not_aware" name="completing" value="I do not know"/>
                    <label className="not_aware" for="generic">I do not know</label>
                 </div>
               </div>
            </form>
         </div>
         <div className="load__next">
            <p>89%</p>
            <Progressbar className="progress" bgcolor="#F29200" progress='89'  height={9} / >
            <div className="navigate">
              <Link to="/frameseven">
                <img className="pre" src={Previous} alt="pre" />
              </Link>
              <Link to="/framenine">
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

export default FrameEight



