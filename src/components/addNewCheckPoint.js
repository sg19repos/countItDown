import React, { useState, Fragment } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { format } from "date-fns";
import InteractiveList from "./listWithDelete";

const snoozeArray = [];
function AddNewCheckPoint() {
    const [newTime, setNewTime] = useState("");

    const handleOnSnoozeClick = () => {
        if (localStorage.getItem("SnoozeArray")) {
            let snoozeArray = JSON.parse(localStorage.getItem("SnoozeArray"))
                .snoozeArray;
            snoozeArray.push(newTime);
            let idsArray = JSON.parse(localStorage.getItem("SnoozeArray"))
                .idsArray;
            let lastId = parseInt(idsArray[idsArray.length - 1]) + 1;
            idsArray.push(lastId);
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray, idsArray: idsArray })
            );
        } else {
            let snoozeArray = [];
            let idsArray = [0];
            snoozeArray.push(newTime);
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray, idsArray: idsArray })
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

    const getElementToDelete = id => {
        let snoozeArray = JSON.parse(localStorage.getItem("SnoozeArray"))
            .snoozeArray;
        let idsArray = JSON.parse(localStorage.getItem("SnoozeArray")).idsArray;
        snoozeArray.splice(id, 1);
        idsArray.splice(id, 1);

        localStorage.setItem(
            "SnoozeArray",
            JSON.stringify({
                snoozeArray: snoozeArray,
                idsArray: idsArray
            })
        );
    };

    const SnoozeList = () => {
        const finalArray = localStorage.getItem("SnoozeArray");
        return finalArray
            ? JSON.parse(finalArray).snoozeArray.map(finalArrayElements => {
                  return (
                      <ul
                          key={JSON.parse(finalArray).snoozeArray.indexOf(
                              finalArrayElements
                          )}
                          id={JSON.parse(finalArray).snoozeArray.indexOf(
                              finalArrayElements
                          )}
                      >
                          {InteractiveList(
                              format(
                                  new Date(finalArrayElements),
                                  "dd-MMMM-yyyy hh:mm:ss p"
                              ),
                              JSON.parse(finalArray).snoozeArray.indexOf(
                                  finalArrayElements
                              ),
                              getElementToDelete
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
