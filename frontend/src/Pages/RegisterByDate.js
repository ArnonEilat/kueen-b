import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import postData from "../APIpost";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/userSlice.js"


function RegisterByDate() {
  //import user's info from redux:
const user= useSelector(selectUser);
const setDate = () => {
  //import user's id from redux.
  //get date from clander component
  //
    postData("/assignToDate", { user:"shir",date:"18/4/22" })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



  return (
    <div className="RegisterByDate">
      <div className="upperArea">
        <Link to="/OpeningScreen">
          <img src={Arrow} className="Arrow" />
        </Link>
        <h1 className="headline">Hi {user.name}, when are you coming?</h1>
      </div>
      <div className="calander"></div>
      <div className="howManyArea">
        <p className="attendance">See who registerd</p>{" "}
      </div>
      <div className="lowerArea">
        <button className="continue" onClick={setDate}>
          continue{" "}
        </button>
      </div>
    </div>
  );
}

export default RegisterByDate;
