import React from "react";
import OpeningScreen from "./Pages/OpeningScreen";
import "./index.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import RegisterByDate from "./Pages/RegisterByDate.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    < Route path="/RegisterByDate" element={<RegisterByDate/>}/>
       {/* < Route path="/RegisterByDate">
          <RegisterByDate />
        </Route> */}
        < Route path="/OpeningScreen" element={<OpeningScreen/>}/>
        < Route path="/" element={<OpeningScreen/>}/>
          {/* <OpeningScreen/>
        </Route> */}
        {/* <Route path="/">
          <OpeningScreen />
        </Route> */}
    </Routes>
    </BrowserRouter>

  );
}
export default App;
