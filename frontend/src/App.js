import React from "react";
import OpeningScreen from "./OpeningScreen";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
