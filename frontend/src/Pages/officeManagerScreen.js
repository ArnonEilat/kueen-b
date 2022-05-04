import { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/calendarElement.css';
import '../components/calendarElement.js';
import MyCalendar from '../components/calendarElement.js';
import './officeManagerScreen.css';
import { Link } from "react-router-dom";



function OfficeManagerScreen() {    
        
    return (
      <div className='OfficeManagerScreen'>
          <div className='myCal'>
        <MyCalendar/>
            </div>

      </div>
    );
  }
  
  export default OfficeManagerScreen;