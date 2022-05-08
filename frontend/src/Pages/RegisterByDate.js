import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import postData from "../APIpost";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice.js";
import { selectDate } from "../redux/dateSlice.js";
import MyCalendar from "../components/calendarElement.js";
import axios from 'axios';
function RegisterByDate() {
  //import user's info from redux:
  const userInstance = useSelector(selectUser);
  const dateInstance = useSelector(selectDate);
  //const chosenDate = MyCalendar.dateText;
  const assignDate = () => {
   // console.log(dateInstance.chosenDate);
    console.log(userInstance.id);
    axios.post('http://localhost:5000/dates/add',{user: userInstance.id, date: dateInstance.dateText})
    .then(a=> {console.log("date chosen!")});
    axios.post('http://localhost:5000/dates/getPerDate', {date: Date.parse(dateInstance.dateText)})
    .then(a=> {console.log(a.data)});
  };
  return (
    <div className="RegisterByDate">
      <div className="upperArea">
        <Link to="/OpeningScreen">
          <img src={Arrow} className="Arrow" />
        </Link>
        <h1 className="headline">Hi {userInstance.name}, when are you coming?</h1>
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