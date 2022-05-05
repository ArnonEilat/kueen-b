import React, { useEffect, useState } from "react";
import "./OpeningScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import img_button from "../Icons/calanderIcon.svg";
import getData from "../APIcall";
import { useDispatch} from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function OpeningScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (data==="Ok") {
      return navigate("/RegisterByDate");
    }
  }, [data]);
  const assignUser =(res)=> {
  //post request to register user to DB
  //if we get id->dispatch
  //else- error/ call func again 
  dispatch(
      login({
        name: name,
        email: email,
      })
    );
  //set Data-response line in order to move the next page
    setData(res.line);
  }
  const regBtn = () => {
    getData(`/validation?email=${email}`)
      .then(res=>assignUser(res))
      .catch(res =>setData(res.line));
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
      </div> <p className="error">{data}</p>
    </div>
  );
}
export default OpeningScreen;
