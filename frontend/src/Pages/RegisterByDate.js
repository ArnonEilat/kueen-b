import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import postData from "../APIpost";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice.js";
import { selectDate } from "../redux/dateSlice.js";
import MyCalendar from "../components/calendarElement.js";

function RegisterByDate() {
  //import user's info from redux:
  const user = useSelector(selectUser);
  const date = useSelector(selectDate);

  const assignDate = () => {
    //   //import user's id from redux.
    //   //get date from redux
    //     // postData("/assignToDate", { user:"shir",date:"18/4/22" })
    //     //   .then((data) => {
    //     //     console.log(data);
    //     //   })
    //     //   .catch((error) => {
    //     //     console.error("Error:", error);
    //     //   });
  };
  return (
    <div className="RegisterByDate">
      <div className="upperArea">
        <Link to="/OpeningScreen">
          <img src={Arrow} className="Arrow" />
        </Link>
        <h1 className="headline">Hi {user.name}, when are you coming?</h1>
      </div>
      <div className="calendar">
        <MyCalendar />
      </div>
      <div className="lowerArea">
        <div className="howManyArea">
          <p className="amount"> 8 registerd</p>
          <p className="attendance">See who registerd</p>
        </div>
        <button onClick={assignDate} className="continue">
          continue
        </button>
      </div>
    </div>
  );
}
export default RegisterByDate;
