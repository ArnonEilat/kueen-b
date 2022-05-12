import { useState, useEffect, useCallback } from "react";
import Calendar from "react-calendar";
import "./calendarForReg.css";
import { useDispatch, useStore } from "react-redux";
import { selectedDate } from "../redux/dateSlice";
import axios from "axios";
const postReq = async (dateText) => {
  const array=await axios.post("http://localhost:5000/dates/getPerDate", {
    date: dateText,
  }); return array;
};
function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const dateText = date.toDateString();
  const dispatch = useDispatch();
  useEffect(() => {
   postReq(dateText).then(transferInfo=>{dispatch(
      selectedDate({
        dateText: dateText,
        usersList:transferInfo.data,
        sum: transferInfo.data.length,
      })
    );})
  }, [date]);
  const store = useStore();
  console.log(store);
  return (
    <div className="myCal">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          next2Label={null}
          prev2Label={null}
        />
      </div>
      <p className="text center">
        <span className="bold">Selected Date:</span>
        {" " + dateText}
      </p>
      <br></br>
    </div>
  );
}
export default MyCalendar;
