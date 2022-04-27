import React from "react";
import OpeningScreen from "./OpeningScreen";
import "./index.css";
import K_Health_logo from "./logoK.svg";
import img_button from "./calanderIcon.svg";
import "./components/Navbar.js";
import { NavLink, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import RegisterByDate from "./Pages/RegisterByDate.js";

function App() {
  return (
    <Router>
      <Switch>
       < Route path="/RegisterByDate">
          <RegisterByDate />
        </Route>
        < Route path="/OpeningScreen">
          <OpeningScreen/>
        </Route>
        <Route path="/">
          <OpeningScreen />
        </Route>
      </Switch>
    </Router>

  );
}
export default App;
