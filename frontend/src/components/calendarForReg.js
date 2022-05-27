import { useState, useEffect, useCallback } from "react";
import Calendar from "react-calendar";
import "./calendarForReg.css";
import { useDispatch, useStore } from "react-redux";
import { selectedDate } from "../redux/dateSlice";
import axios from "axios";
import disableWeekends from "../functions";

const postReq = async (dateText) => {
  const array = await axios.post(
    process.env.REACT_APP_SERVER_URL + "/dates/getPerDate",
    {
      date: dateText,
    }
  );
  return array;
};
function MyCalendar1() {
  const [date, setDate] = useState(new Date());
  const dateText = date.toDateString();
  const dispatch = useDispatch();
  useEffect(() => {
    postReq(dateText).then((transferInfo) => {
      dispatch(
        selectedDate({
          date: date,
          dateText: dateText,
          usersList: transferInfo.data,
          sum: transferInfo.data.length,
        })
      );
    });
  }, [date]);
  const store = useStore();
  console.log(store);
  return (
    <div className="MyCal2" id="parentCal">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          next2Label={null}
          prev2Label={null}
          calendarType="Hebrew"
          navigationLabel={({ date, label, locale, view }) => {
            return date.toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
            });
          }}
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString("en-us", { weekday: "short" });
          }}
          // disable tile on weekend
          tileDisabled={({ activeStartDate, date, view }) => {
            const day = date.getDay();
            return disableWeekends(day);
          }}
        />
      </div>
      <p className="text_center">
        <span className="bold">Selected Date:</span>
        {" " + dateText}
      </p>
      <br></br>
    </div>
  );
}
export default MyCalendar1;
