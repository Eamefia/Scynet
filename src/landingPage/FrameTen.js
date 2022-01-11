import React, {useState} from 'react';
import "./FrameOne.css";
import Logo from "./Scynet-logo.png";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function FrameSeven() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [agreement, setAgreement] = useState("");

  
  function serviceChange(e) {
    setAgreement(e.target.value);
  }
  
   function submitInfor(){
     if (email !== "" && name !== "" && company !== "" && contact !== "") {
       dispatch({
         type: 'ADD_T0_FRAMEONE',
         item: {
           name,
           email,
           company,
           contact,
           agreement
         }
       });
       history.push("/trial");
     }
   }
    return (
        <div className="frame">
        <div className="frame_one">
         <header className="frame__header">
           <h2>Get free consultation and quote for your website</h2>
         </header>
         <div className="frame__items">
            <p>Almost done. Kindly leave us your personal details so we can get in touch with you?</p>
          </div>
          <form className="pt-5 p-lg-5">
          <div className="row">
          <div className="col form-group row">
          <label for="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-8">
            <input type="text" value={name} onChange={e => setName(e.target.value)}  className="form-control" id="name" placeholder="Name" />
          </div>
        </div>
        <div className="col form-group row">
          <label for="company" className="col-sm-2 col-form-label">Company</label>
          <div className="col-sm-8">
            <input type="text" value={company} onChange={e => setCompany(e.target.value)}  className="form-control" id="company" placeholder="Company name" />
          </div>
        </div>
       </div>
       <div className="row pt-5">
        <div className=" col form-group row">
        <label for="contact" className="col-sm-2 col-form-label">Contact</label>
        <div className="col-sm-8">
          <input type="text" value={contact} onChange={e => setContact(e.target.value)}  className="form-control" id="contact" placeholder="Contact number" />
        </div>
      </div>
      <div className="col form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-8">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}  class="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      </div>
        </form>
         <div className="load__next">
         <form value={agreement} onChange={(e) => serviceChange(e)} >
           <input type="checkbox" value="Yes, I agree to the privacy policy and the terms and condtions. (Revocation possible)"  id="company" name="phone"/>
           <label for="company">Yes, I agree to the privacy policy and the terms and condtions. (Revocation possible)</label>
           </form>
         </div>
         </div>
         <div className="text-center">
            <button className="px-4  bg-primary" onClick={submitInfor} required>Submit</button>
         </div>
         <footer className="footer">
           <p>Once all your answers have been recorded, we will send you a response to your email or phone call</p>
           <div className="footer__logo">
           <img className="scynett__logo" src={Logo} alt="Scynett" />
           <stron>SCYNETT</stron>
           </div>
         </footer>
        </div>
    )
}

export default FrameSeven
