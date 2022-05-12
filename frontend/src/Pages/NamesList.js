import React from "react";
import Arrow from "../Icons/Arrow.svg";
import { Link } from "react-router-dom";
import './NamesList.css';
import { useSelector } from "react-redux";
import { selectDate } from "../redux/dateSlice.js";


function NamesList() {

    const dateInstance = useSelector(selectDate);
    const userslist =dateInstance.usersList;
    const date=dateInstance.dateText;

    return (
        <div className="NamesList">
            <div className="headers">
                <Link to="/RegisterByDate">
                    <img src={Arrow} className="Arrow1" />
                </Link>
                <div className="title">Attendance</div>
                <div className="date">
                    <div className="selectedate">
                        {date}
                    </div>
                </div>
            </div>
            <div className="nameslist">
                {userslist}
            </div>
        </div>
    );
}
export default NamesList;