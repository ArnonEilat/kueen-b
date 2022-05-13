import "../components/calendarElement.css";
import "../components/calendarElement.js";
import MyCalendar from "../components/calendarElement.js";
import "./OfficeManagerScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import React, { useState } from 'react';
import leftArrow from "../Icons/leftArrow.svg";
import rightArrow from "../Icons/rightArrow.svg";
import { useSelector } from "react-redux";
import { selectDate } from "../redux/dateSlice.js";


function OfficeManagerScreen() {
  const [date, setDate] = useState(new Date());
<<<<<<< HEAD
=======
  const WEEK_DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

>>>>>>> dacd2b070de8f87c4378e730ec5cefcc002d3720
  const dateInstance = useSelector(selectDate);
  const userslist = dateInstance.usersList;


  return (
    <div className="OfficeManagerScreen">
      <div className="topArea">
        <div className="desktopnav" >
          <div className="header">
            <img src={K_Health_logo} className="klogo" />
            <div className="Health">health
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="myCal">
          <MyCalendar date={date} onChange={(newDate) => setDate(newDate)} />
        </div>
      </div>
      <div className="chooseday" >
      </div>
      <div className="line"></div>
      <div className="registeredArea">
        <div className="switchingdays">

          <img src={leftArrow} onClick={() => {
            const day = date.getDate()
            const newDate = new Date(date)
            newDate.setDate(day - 1)
            setDate(newDate)
          }} className="prevArrow" />

          <div className="chosenDay">
            {dateInstance.dateText}
          </div>

          <img src={rightArrow} onClick={() => {
            const day = date.getDate()
            const newDate = new Date(date)
            if (day + 1 === 5) {
              newDate.setDate(day + 2)
              setDate(newDate)
            }
            else if (day + 1 === 6) {
              newDate.setDate(day + 1)
              setDate(newDate)
            }
            else {
              newDate.setDate(day + 1)
              setDate(newDate)
            }
          }} className="nextArrow" />
        </div>
        <div className="registerdArea">
          <p className="amountregisterd">{dateInstance.sum} registerd</p>
        </div>
        <div className="list">
          <ol>{userslist && userslist.map((u) => <li>{u}</li>)}</ol>
        </div>
      </div>
    </div>
  );
}

export default OfficeManagerScreen;