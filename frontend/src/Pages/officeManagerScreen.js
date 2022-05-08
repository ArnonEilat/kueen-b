import "../components/calendarElement.css";
import "../components/calendarElement.js";
import MyCalendar from "../components/calendarElement.js";
import "./OfficeManagerScreen.css";
import K_Health_logo from "../Icons/logoK.svg";

function OfficeManagerScreen() {
  return (
    <div className="OfficeManagerScreen">
      <div className="topArea">
        <div className="desktopnav" >
          <div className="header">
            <img src={K_Health_logo} className="klogo" />
            <div className="Health">
              <div className="h1">h </div>
              <div className="e">e</div>
              <div className="a">a</div>
              <div className="l">l</div>
              <div className="t">t</div>
              <div className="h2">h</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="myCal">
          <MyCalendar />
        </div>
      </div>
      <div className="chooseday" >
      </div>
      <div className="line"></div>
      <div className="registeredArea">
        <div className="switchingdays"></div>
        <p className="attendance">8 registered</p>
      </div>
    </div>
  );
}

export default OfficeManagerScreen;