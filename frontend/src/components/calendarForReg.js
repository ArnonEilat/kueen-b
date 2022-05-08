import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./calendarForReg.css";
import { useDispatch , useStore} from "react-redux";
import { selectedDate } from "../redux/dateSlice";
import getData from "../APIcall";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [sum,setSum]= useState("");
  const dateText = date.toDateString();
  const dispatch = useDispatch();

  useEffect(() => {
    // getData(`/registerdSum=${dateText}`)
    //   .then((res) => setSum(res.data))
    //date.setHours(20);
      return dispatch(
        selectedDate({
          dateText: dateText,
          //sum:sum
        })
      );
  }, [date]);
  const store = useStore()
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