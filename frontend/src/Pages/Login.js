import React, { useState } from "react";
import "./Login.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import getData from "../APIcall";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const login= () => {
    console.log("login");
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/users/login", {   
        email: email,
        password:password
      })
      .then((a) => {
        console.log("dispatch");
        dispatch(
          login({
            mail: email,
            password:password,
            id: a.data,
          })
        );
        return navigate("/RegisterByDate");
      }).catch((error) =>{console.log(error.response.data.line)});}
  return (
    <div className="Login">
      <img src={K_Health_logo} className="logo" />
      <p className="head">Office registration form</p>
      <div className="loginArea">
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
        
      </div><button onClick={login} className="registerButton">login
        </button>
      <p className="error">{data}</p>
      <p className="dont">dont have an acount?<Link to="/Signup">sign up</Link></p>
      
    </div>
  );
}
export default Login;
