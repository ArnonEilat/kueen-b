import React from "react";
import Calendar from "react-calendar";
import "./calendarElement.css";
import disableWeekends from "../functions";

function MyCalendar(props) {
  const headerRender = () => null;
  return (
    <div className="myCal" id="parOfficeCal">
      <div className="calendar-container">
        <Calendar
          onChange={props.onChange}
          value={props.date}
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
          //disable tile on weekend
          tileDisabled={({ activeStartDate, date, view }) => {
            const day = date.getDay();
            return disableWeekends(day);
          }}
        />
      </div>
    </div>
  );
}
export default MyCalendar;
