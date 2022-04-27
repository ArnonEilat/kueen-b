import React from "react";
import RegisterByDate from "./Pages/RegisterByDate.js";
import "./index.css";
import K_Health_logo from "./logoK.svg";
import img_button from "./calanderIcon.svg";
import { NavLink, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

 
 
 function OpeningScreen(){

 const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");


  return (
  <div className="OpeningScreen">
      <img src={K_Health_logo} className="logo" />
      <p className="head">Office registration form</p>
      <br></br>
      <input
        onChange={(n) => setName(n.target.value)}
        className="e-input"
        type="text"
        placeholder="Your Name"
      />
      <br></br>
      <br></br>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="e-input"
        type="email"
        placeholder="Email"
      />
      <br></br>
      <br></br>
      <br></br>
     <Link to="/RegisterByDate">
      <button
        onClick={() => console.log(name + " " + email)}
        id="registerButton"
      >
        {" "}
        <img src={img_button} className="imgButton" />
        <br></br>
        <p id="textButton">
          Register to a day<br></br> in the office
        </p>
      </button>
     </Link>
 </div>
);
}
export default OpeningScreen;
