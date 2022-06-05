import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import RegisterByDate from "./Pages/RegisterByDate.js";
import NamesList from "./Pages/NamesList.js";
import OfficeManagerScreen from "./Pages/OfficeManagerScreen.js";
import Login from "./Pages/Login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterByDate" element={<RegisterByDate />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/NamesList" element={<NamesList />} />
        <Route path="/OfficeManagerScreen" element={<OfficeManagerScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
