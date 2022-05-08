import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpeningScreen from "./Pages/OpeningScreen";
import RegisterByDate from "./Pages/RegisterByDate.js";
import OfficeManagerScreen from "./Pages/OfficeManagerScreen.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterByDate" element={<RegisterByDate />} />
        <Route path="/OpeningScreen" element={<OpeningScreen />} />
        <Route path="/OfficeManagerScreen" element={<OfficeManagerScreen />} />
        <Route path="/" element={<OpeningScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
