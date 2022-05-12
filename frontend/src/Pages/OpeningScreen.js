import React, { useState } from "react";
import "./OpeningScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import getData from "../APIcall";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function OpeningScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (data === "Ok") {
  //     return navigate("/RegisterByDate");
  //   }
  // }, [data]);
  const assignUser =  (res) => {
    //post request to register user to DB:
    // postData('/add', {name: "abc" ,mail: "email"})
    //   .then((res) => setID(res))
    //   .catch((res) => setData(res.line));
    console.log("hello");
    axios.post('http://localhost:6000/users/add',{name: name, email: email})
    .then(a=> { 
      dispatch(
        login({
          name: name,
          mail: email,
          id: a.data
        })
       );
      return navigate("/RegisterByDate");
    });

    //set Data-change response line in order to move the next page
    
    
  };
  const regBtn = () => {

    console.log("regBtn");
    //get request in order to check mail validation:
   getData(`/validation?email=${email}`)
      //if we get id->dispatch:
      .then((res) => assignUser(res))
      //else- error/ call func again :
      .catch((res) => setData(res.line));
  };
  return (
    <div className="OpeningScreen">
      <img src={K_Health_logo} className="logo" />
      <p className="head">Office registration form</p>
      <div className="loginArea">
        <input
          onChange={(n) => setName(n.target.value)}
          className="nameInput"
          type="text"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="emailInput"
          type="email"
          placeholder="Email"
        />
        <button onClick={regBtn} className="registerButton">
          {" "}
          <img src={img_button} className="imgButton" />
          <p className="textButton">
            Register to a day<br></br> in the office
          </p>
        </button>
      </div>{" "}
      <p className="error">{data}</p>
    </div>
  );
}
export default OpeningScreen;