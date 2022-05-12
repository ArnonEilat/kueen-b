import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./calendarElement.css";
import { useDispatch , useStore} from "react-redux";
import { selectedDate } from "../redux/dateSlice";
import getData from "../APIcall";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [sum,setSum]= useState("");
  const dateText = date.toDateString();
  const dispatch = useDispatch();


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