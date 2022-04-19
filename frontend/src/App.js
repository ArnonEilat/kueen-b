<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./App.css";
import getData from "./APIcall";


function App() {
  
  const [data,setData] = useState(null) 
  
  useEffect(() => {
    // Call our fetch function below once the component mounts
    getData()
      .then(res => setData(res.express))
      .catch(err => console.log(err)); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
=======
{/* import "./index.css";
import K_Health_logo from "./logoK.svg";
import img_button from "./calanderIcon.svg";

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
      </button> */}
>>>>>>> main
    </div>
  );
}

export default App;




