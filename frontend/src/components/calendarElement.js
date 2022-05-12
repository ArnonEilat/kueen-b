import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./calendarElement.css";
import { useDispatch } from "react-redux";
import { selectedDate } from "../redux/dateSlice";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const dateText = date.toDateString();
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(
      selectedDate({
        // id: user_id,
        chosenDate: date,
        dateText: dateText,
      })
    );
  }, [date]);
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
