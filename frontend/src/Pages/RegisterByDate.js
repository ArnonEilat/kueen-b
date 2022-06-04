import React from "react";
import "./RegisterByDate.css";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice.js";
import { selectDate, selectedDate } from "../redux/dateSlice.js";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyCalendar1 from "../components/calendarForReg.js";
import axios from "axios";

function RegisterByDate() {
  const userInstance = useSelector(selectUser);
  const dateInstance = useSelector(selectDate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postReq = async (dateText) => {
    const array = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/dates/getPerDate",
      {
        date: dateText,
      }
    );
    return array;
  };
  const assignDate = async () => {
    await axios
      .post(process.env.REACT_APP_SERVER_URL + "/dates/add", {
        user: userInstance.id,
        date: dateInstance.dateText,
      })
      .then((updateArray) => {
        postReq(dateInstance.dateText).then((transferInfo) => {
          dispatch(
            selectedDate({
              dateText: dateInstance.dateText,
              usersList: transferInfo.data,
              sum: transferInfo.data.length,
            })
          );
          return navigate("/NamesList");
        });
      });
  };
  return (
    <div className="RegisterByDate">
      <div className="upperArea">
        <Link to="/Signup">
          <img src={Arrow} className="Arrow" />
        </Link>
        <h1 className="headline">When are you coming?</h1>
      </div>
      <div className="calendar" id="calReg">
        <MyCalendar1 />
      </div>
      <div className="lowerArea">
        <div className="howManyArea">
          <p className="amount">{dateInstance.sum} registerd</p>
          <Link to="/NamesList">
            <span className="attendance">See who registerd</span>
          </Link>
        </div>
        <button onClick={assignDate} className="continue">
          continue
        </button>
      </div>
    </div>
  );
}
export default RegisterByDate;
