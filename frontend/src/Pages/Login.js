import React, { useState } from "react";
import "./Login.css";
import K_Health_logo from "../Icons/logoK.svg";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/users/login", {
        email: email,
        password: password,
      })
      .then((a) => {
        console.log("dispatch");
        dispatch(
          userDetails({
            mail: email,
            password: password,
            id: a.data,
          })
        );
        return navigate("/RegisterByDate");
      })
      .catch((error) => {
        setData(error.response.data.line);
      });
  };
  return (
    <div className="Login">
      <img src={K_Health_logo} className="logo" />
      <p className="head">Office registration</p>
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
          type="password"
          placeholder="Password"
        />
      </div>
      <button onClick={login} className="registerButton">
        login
      </button>
      <p className="error">{data}</p>
      <p className="dont">
        Don't have an acount? <Link to="/Signup">sign up</Link>
      </p>
    </div>
  );
}
export default Login;
