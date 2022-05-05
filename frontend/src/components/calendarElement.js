
import { min } from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendarElement.css';


function MyCalendar() {
    
    const [date, setDate] = useState(new Date());
    var time = new Date();
    var maxDate = time.setDate(time.getDate()+14);
    var minDate = time.setDate(time.getDate()-14)
    return (
      <div className='myCal'>
        <h1 className='text-center'><br></br></h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} next2Label={null} prev2Label={null} 
          />
        </div>
        <p className='text center'>
            <span className='bold'>Selected Date:</span>
            {' ' + date.toDateString()}
        </p>
        <br></br>
      </div>
    );
  }
  


  export default MyCalendar;

