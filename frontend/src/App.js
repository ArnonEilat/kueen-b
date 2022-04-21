import React from "react";
import "./index.css";
import "./RegisterByDate.js";
import K_Health_logo from "./logoK.svg";
import img_button from "./calanderIcon.svg";
import "./components/Navbar.js";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';


function App() {
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  

  return (
    <div className="App">
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
 </div>
    
  );
}

export default App;
