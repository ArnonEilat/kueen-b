import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendarElement.css';
function MyCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className='myCal'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} next2Label={null} prev2Label={null}   calendarType="Hebrew"
          navigationLabel={({ date, label, locale, view }) => {
            return date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
          }
          }
          formatShortWeekday={(locale, date) => {
            return date.toLocaleDateString('en-us', { weekday: 'short' });
          }
          }
        />
      </div>
    </div>
  );
}
export default MyCalendar;