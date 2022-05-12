import React from "react";
import OpeningScreen from "./Pages/OpeningScreen";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterByDate from "./Pages/RegisterByDate.js";
import RegPerDate from "./Pages/RegPerDate.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RegisterByDate" element={<RegisterByDate />} />
        <Route path="/OpeningScreen" element={<OpeningScreen />} />
        <Route path="/RegPerDate" element={<RegPerDate />} />
        <Route path="/" element={<OpeningScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
