import React from "react";
import OpeningScreen from "./Pages/OpeningScreen";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterByDate from "./Pages/RegisterByDate.js";
import NamesList from "./Pages/NamesList.js";
import OfficeManagerScreen from "./Pages/OfficeManagerScreen.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterByDate" element={<RegisterByDate />} />
        <Route path="/OpeningScreen" element={<OpeningScreen />} />
        <Route path="/NamesList" element={<NamesList />} />
        <Route path="/OfficeManagerScreen" element={<OfficeManagerScreen />} />
        <Route path="/" element={<OpeningScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
