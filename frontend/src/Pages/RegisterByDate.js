import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import postData from "../APIpost";

function RegisterByDate() {
  //send id from the opening screen
let date="18/4/22";
let user="Shir";
const setDate = () => {
    postData("/assignToDate", { user,date })
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
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
        <h1 className="headline">When are you coming?</h1>
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
