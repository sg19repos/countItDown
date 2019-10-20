import React, { useState, Fragment } from "react";
import "react-datetime/css/react-datetime.css";
import CheckPoint from "./checkPoints";

import ButtonSizes from "./snoozeButton";
import InputFieldStyles from "../styles/InputFieldStyles";
import SnoozeListStyles from "../styles/snoozeListStyles";

// import SnoozeInputFields from "./snoozeInputField";
import MaterialUIPickers from "./dateTimePicker";

const snoozeArray = [];
function AddNewCheckPoint() {
    const [newTime, setNewTime] = useState("");
    const [snoozeElements, setSnoozeElements] = useState(
        localStorage.getItem("SnoozeArray")
            ? JSON.parse(localStorage.getItem("SnoozeArray")).snoozeArray
            : []
    );

    const handleOnSnoozeClick = () => {
        if (
            localStorage.getItem("SnoozeArray") &&
            JSON.parse(localStorage.getItem("SnoozeArray")).snoozeArray.length >
                0
        ) {
            let snoozeArray = JSON.parse(localStorage.getItem("SnoozeArray"))
                .snoozeArray;
            if (newTime == "") {
                snoozeArray.push(
                    new Date().setMinutes(new Date().getMinutes() + 1)
                );
            } else {
                snoozeArray.push(newTime);
            }
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray })
            );
        } else {
            let snoozeArray = [];
            snoozeArray.push(
                new Date().setMinutes(new Date().getMinutes() + 1)
            );
            localStorage.setItem(
                "SnoozeArray",
                JSON.stringify({ snoozeArray: snoozeArray })
            );
        }
        setNewTime(snoozeArray);
        setSnoozeElements(
            JSON.parse(localStorage.getItem("SnoozeArray")).snoozeArray
        );
        window.location.reload();
    };

    const handleOnDateChange = e => {
        setNewTime(e);
    };

    const AddNewBtn = () => {
        return (
            <ButtonSizes
                triggerClick={() => {
                    handleOnSnoozeClick();
                }}
            />
        );
    };

    const getElementToDelete = id => {
        let snoozeArray = JSON.parse(localStorage.getItem("SnoozeArray"))
            .snoozeArray;

        snoozeArray.splice(id, 1);

        localStorage.setItem(
            "SnoozeArray",
            JSON.stringify({
                snoozeArray: snoozeArray
            })
        );
        setSnoozeElements(
            JSON.parse(localStorage.getItem("SnoozeArray")).snoozeArray
        );
    };

    const SnoozeList = () => {
        return snoozeElements
            ? snoozeElements.map(finalArrayElement => {
                  return (
                      <CheckPoint
                          key={snoozeElements.indexOf(finalArrayElement)}
                          snoozeElements={snoozeElements}
                          finalArrayElement={finalArrayElement}
                          getElementToDelete={getElementToDelete}
                      />
                  );
              })
            : null;
    };

    return (
        <Fragment>
            <InputFieldStyles>
                <MaterialUIPickers handleOnDateChange={handleOnDateChange} />
            </InputFieldStyles>
            <AddNewBtn />
            <SnoozeListStyles>
                <SnoozeList />
            </SnoozeListStyles>
        </Fragment>
    );
}

export default AddNewCheckPoint;
