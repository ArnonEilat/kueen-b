import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './calendarElement.css';
import { useDispatch } from "react-redux";
import { selectedDate } from "../redux/dateSlice";
import axios from "axios";


const postReq = async (dateText) => {
  const array = await axios.post("http://localhost:5001/dates/getPerDate", {
    date: dateText,
  }); return array;
};

  
function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const dateText = date.toDateString();
  const dispatch = useDispatch();
  useEffect(() => {
    postReq(dateText).then(transferInfo => {
      dispatch(
        selectedDate({
          dateText: dateText,
          usersList: transferInfo.data,
          sum: transferInfo.data.length,
        })
      );
    })
  }, [date]);
  const headerRender = () => null;
  return (
    <div className='myCal'  id="parOfficeCal">
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} next2Label={null} prev2Label={null} calendarType="Hebrew" 
          navigationLabel={({ date, label, locale, view }) => {
            return date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
          }
          }
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString('en-us', { weekday: 'short' });
          }
          }
          tileDisabled={({activeStartDate, date, view }) => {
            const day = date.getDay()
            return (day === 6 || day === 5);
          }
          }
        />
      </div>
    </div>
  );
}
export default MyCalendar;