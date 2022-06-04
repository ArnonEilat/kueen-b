import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const regBtn = () => {
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/users/add", {
        name: name,
        email: email,
        password: password,
      })
      .then((a) => {
        dispatch(
          userDetails({
            name: name,
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
          type="password"
          placeholder="Password"
        />
      </div>
      <button onClick={regBtn} className="submit">
        submit
      </button>
      <p className="error">{data}</p>
    </div>
  );
}
export default Signup;
