import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice.js";
import { selectDate } from "../redux/dateSlice.js";
import { useNavigate } from "react-router-dom";
import MyCalendar from "../components/calendarForReg.js";
import axios from 'axios';

function RegisterByDate() {
  //import user's info from redux:
  const userInstance = useSelector(selectUser);
  const dateInstance = useSelector(selectDate);


  // const navigateNextPage=()=>{
  // }
  const navigate = useNavigate();
  // const seeWhoRg= ('http://localhost:6000/dates/getPerDate') => {
  //   // axios.get('')
  //  //get request
  //  //move to next page;
  // }
  const assignDate = async () => {
    console.log(userInstance.id);
    await axios.post('http://localhost:6000/dates/add', { user: userInstance.id, date: dateInstance.dateText })
      .then(() => { console.log("date chosen!") })
    //nav to next page inside then;
  }
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
          <p className="amount">{dateInstance.sum} registerd</p>
          {/* /*should call a func that sends get req+ navigates to next page*/}
          <span className="attendance">See who registerd</span>
        </div>
          <button onClick={assignDate} className="continue">
            continue
          </button>
      </div>
    </div>
  );
}
export default RegisterByDate;