import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>this is a test header</h1>
     
     <Link to={"./components/calenderReg.js"}>
       go to registration
    </Link>
    </div>
  );
}

export default App;
