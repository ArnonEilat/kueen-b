import React from "react";
import "./RegisterByDate.css";
import Arrow from "./Arrow.svg";
import { render } from "@testing-library/react";

function goBack() {
  <link to="/.App.js"></link>;
}
function registerToDate() {}
function RegisterByDate() {
  render();
  return (
    <div className="RegisterByDate" id="RegisterByDate">
      <div className="upperArea">
        <h1 className="headline">When are you coming?</h1>
        <button onClick={goBack()} className="Arrow">
          <img src={Arrow} className="Arrow" />
        </button>{" "}
      </div>
      <div className="calander"></div>
      <div className="howManyArea"> </div>
      <button onClick={registerToDate()} className="continue">continue</button>
    </div>
  );
}

export default RegisterByDate;
