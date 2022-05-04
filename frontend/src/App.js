import React from "react";
import OpeningScreen from "./Pages/OpeningScreen";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterByDate from "./Pages/RegisterByDate.js";
import officeManagerScreen from "./Pages/officeManagerScreen.js";

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
        < Route path="/officeManagerScreen">
          <officeManagerScreen/>
        </Route>
        <Route path="/">
          <OpeningScreen />
        </Route>
      </Switch>
    </Router>

  );
}
export default App;
