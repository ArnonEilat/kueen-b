import React from "react";
import "./RegisterByDate.css";
import Arrow from "./Arrow.svg";
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom';
import React, {Component} from "react";
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
       <Link to="/OpeningScreen">
          <img src={Arrow} className="Arrow" /></Link>
           {<div className="howManyArea"> </div>}
      </div>
      <div className="calander"></div>
      <div className="lowerArea"><h1>vhh</h1></div>
     
    </div>
  );
}

export default RegisterByDate;
