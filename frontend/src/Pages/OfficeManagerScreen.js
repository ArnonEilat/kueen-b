import "../components/calendarElement.css";
import "../components/calendarElement.js";
import MyCalendar from "../components/calendarElement.js";
import "./OfficeManagerScreen.css";
import K_Health_logo from "../Icons/logoK.svg";
import React, { useState, useEffect } from "react";
import leftArrow from "../Icons/leftArrow.svg";
import rightArrow from "../Icons/rightArrow.svg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectDate, selectedDate } from "../redux/dateSlice.js";
import changeURL from "../urlChangefunc";

const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let API_URL=changeURL();
const postReq = async (dateText) => {

  const array = await axios.post(API_URL+"/dates/getPerDate", {
    date: dateText,
  });
  return array;
};
function OfficeManagerScreen() {
  const [date, setDate] = useState(new Date());

  const dateText = date.toDateString();
  const dispatch = useDispatch();
  const dateInstance = useSelector(selectDate);
  const userslist = dateInstance.usersList;
  useEffect(() => {
    postReq(dateText).then((transferInfo) => {
      dispatch(
        selectedDate({
          dateText: dateText,
          usersList: transferInfo.data,
          sum: transferInfo.data.length,
        })
      );
    });
  }, [date]);
  return (
    <div className="OfficeManagerScreen">
      <div className="topArea">
        <div className="desktopnav">
          <div className="header">
            <img src={K_Health_logo} className="klogo" />
            <div className="Health">health</div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="myCal">
          <MyCalendar date={date} onChange={(newDate) => setDate(newDate)} />
        </div>
      </div>
      <div className="chooseday"></div>
      <div className="line"></div>
      <div className="registeredArea">
        <div className="switchingdays">
          <img
            src={leftArrow}
            onClick={() => {
              const day = date.getDay();
              const dayOnMonth = date.getDate();
              const newDate = new Date(date);
              // to skip weekends by arrows
              if (day - 1 === -1) {
                newDate.setDate(dayOnMonth - 3);
                setDate(newDate);
              } else {
                newDate.setDate(dayOnMonth - 1);
                setDate(newDate);
              }
            }}
            className="prevArrow"
          />
          <div className="chosenDay">
            {WEEKDAY[date.getDay()]}, {MONTH[date.getMonth()]} {date.getDate()},{" "}
            {date.getFullYear()}
          </div>
          <img
            src={rightArrow}
            onClick={() => {
              const day = date.getDay();
              const dayOnMonth = date.getDate();
              const newDate = new Date(date);
              // to skip weekends by arrows
              if (day + 1 === 5) {
                newDate.setDate(dayOnMonth + 3);
                setDate(newDate);
              } else {
                newDate.setDate(dayOnMonth + 1);
                setDate(newDate);
              }
            }}
            className="nextArrow"
          />
        </div>
        <div className="registerdArea">
          <p className="numOfReg">{dateInstance.sum} registerd</p>
        </div>
        <div className="list">
          <ol>{userslist && userslist.map((u) => <li>{u}</li>)}</ol>
        </div>
      </div>
    </div>
  );
}
export default OfficeManagerScreen;
