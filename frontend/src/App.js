import React, { useEffect, useState } from "react";
import "./index.css";
import K_Health_logo from "./logoK.svg";
import img_button from "./calanderIcon.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const getData = async (email) => {
    try {
      const response = await fetch(`/validation?email=${email}`);
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      setData(body.express)
      return body;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    // Call our fetch function below once the component mounts
    getData()
      .then((res) => setData(res.express))
      .catch((err) => console.log(err));
  }, []);

  // fetch(`http://localhost:5000/validation?email=${email}`)
  // .then(response => response.json())
  // .then(data => console.log(data));

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
      <button onClick={() => getData(email)} id="registerButton">
        {" "}
        <img src={img_button} className="imgButton" />
        <br></br>
        <p id="textButton">
          Register to a day<br></br> in the office
        </p>
      </button>
      <p>{data}</p>
    </div>
  );
}

export default App;
