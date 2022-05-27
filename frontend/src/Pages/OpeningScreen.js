import React, { useState } from "react";
import "./OpeningScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import getData from "../APIcall";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OpeningScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const assignUser = (res) => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/users/add", {
        name: name,
        email: email,
      })
      .then((a) => {
        dispatch(
          login({
            name: name,
            mail: email,
            id: a.data
          })
        );
        return navigate("/RegisterByDate");
      });
  };

    //set Data-change response line in order to move the next page
  const regBtn = () => {
    getData(`/nameValidation?name=${name}`)
      .then(
        //get request in order to check mail validation:
        getData(`/validation?email=${email}`)
          //if we get id->dispatch:
          .then((res) => assignUser(res))
          //else- error/ call func again :
          .catch((res) => setData(res.line))
      )
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
            Register to a day<br></br> in the Office
          </p>
        </button>
      </div>{" "}
      <p className="error">{data}</p>
    </div>
  );
}
export default OpeningScreen;
