import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./StateProvider";


function Trial() {
  const [{frameone}] = useStateValue();
  
    return (
      <div className="text-center p-5">
       <h4>this are the information you provided</h4>
      {frameone.map((item) =>{
        return(
        <div className="row pt-3">
        <div className="  form-group col-6 row">
         <p>{item.question}</p>
        </div>
      <div className=" form-group col-6 row">
       <p>{item.answer}</p>
      </div>
        </div>
    )})}
      </div>
    )
  }

export default Trial

