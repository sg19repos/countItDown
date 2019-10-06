import React, { useState, Fragment } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { format } from "date-fns";

const snoozeArray = [];
function AddNewCheckPoint() {
    const [newTime, setNewTime] = useState("");

    const handleOnSnoozeClick = () => {
        if (localStorage.getItem("SnoozeArray")) {
            let snoozeArray = JSON.parse(localStorage.getItem("SnoozeArray"))
                .snoozeArray;
            snoozeArray.push(newTime);
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray })
            );
        } else {
            let snoozeArray = [];
            snoozeArray.push(newTime);
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray })
            );
        }
        setNewTime(snoozeArray);
    };

    const handleOnDateChange = e => {
        setNewTime(e._d);
    };

    const AddNewBtn = () => {
        return (
            <button name="addNewCheckPoint" onClick={handleOnSnoozeClick}>
                Snooze here
            </button>
        );
    };

    const SnoozeList = () => {
        const finalArray = localStorage.getItem("SnoozeArray");
        return finalArray
            ? JSON.parse(finalArray).snoozeArray.map(finalArrayElements => {
                  return (
                      <ul>
                          {format(
                              new Date(finalArrayElements),
                              "dd-MMMM-yyyy hh:mm:ss p"
                          )}
                      </ul>
                  );
              })
            : null;
    };

    return (
        <Fragment>
            <Datetime onChange={handleOnDateChange} />
            <AddNewBtn />
            <SnoozeList />
        </Fragment>
    );
}

export default AddNewCheckPoint;
