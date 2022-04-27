import React from "react";
import "./RegisterByDate.css";
import Arrow from "./Arrow.svg";
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
// function goBack() {
//  <link to="/.App.js"></link>;
// }

function RegisterByDate () {
  const registerToDate = () => {
    
  }
 
 return (
    <div className="RegisterByDate">
      <div className="upperArea">
        <h1 className="headline">When are you coming?</h1>
       <Link to="/OpeningScreen"><img src={Arrow} className="Arrow" /></Link>
      </div>
      <div className="howManyArea"><p className="attendance">See who registerd</p> </div>
      <div className="calander"></div>
      <div className="lowerArea"><button className="continue">continue </button></div>
     
    </div>
  );
}

export default RegisterByDate;
