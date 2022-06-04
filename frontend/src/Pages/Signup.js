import React, { useState } from "react";
import "./Signup.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import getData from "../APIcall";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const regBtn = () => {
    console.log("reg");
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/users/add", {   
        name: name,
        email: email,
        password:password
      })
      .then((a) => {
        dispatch(
          login({
            name: name,
            mail: email,
            password:password,
            id: a.data,
          })
        );
        return navigate("/RegisterByDate");
      }).catch((error) =>{setData(error.response.data.line)});

    //set Data-change response line in order to move the next page
  };
  return (
    <div className="Signup">
      <div className="upperArea">
        <Link to="/Login">
          <img src={Arrow} className="Arrow" />
        </Link>
        <h1 className="headline">Sign up</h1>
      </div>
      <div className="loginArea">
        <p className="secondHead">Sign up for office registration</p>
        <input
          onChange={(n) => setName(n.target.value)}
          className="nameInput"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="emailInput"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="passwordInput"
          type="text"
          placeholder="Password"
        />
     
    </div><button onClick={regBtn} className="submit">submit</button>
      <p className="error">{data}</p></div>
  );
}
export default Signup;
