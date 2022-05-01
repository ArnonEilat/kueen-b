import RegisterByDate from "./RegisterByDate.js";
import React, { useEffect, useState } from "react";
import "./OpeningScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import { NavLink, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import getData from "../APIcall";

 
 
 function OpeningScreen(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const regBtn = (email) => {
    const mailData = getData(`/validation?email=${email}`)
    .then(res => setData(res.line))
    .catch(err => console.log(err));

  } 

  

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
        onClick={regBtn(email)}
        id="registerButton" >
        {" "}
        <img src={img_button} className="imgButton" />
        <br></br>
        <p id="textButton">
          Register to a day<br></br> in the office
        </p>
      </button>
     </Link>
     <p>{data}</p>
 </div>
);
}
export default OpeningScreen;
