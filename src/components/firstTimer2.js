import React, { useState, useEffect } from "react";
import {
    // formatDistance,
    // differenceInMonths,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds
} from "date-fns";

function FirstTimer2({ getUpatesfromChild }) {
    // const getUpatesfromChild = this.props;
    // console.log("getUpatesfromChild", getUpatesfromChild);
    const [newTime, setNewTime] = useState();

    const finishTime = new Date("01/01/2020");
    const currentTime = new Date();

    const timer = () => {
        setNewTime(differenceInSeconds(finishTime, currentTime) - 1);
        localStorage.setItem("currentTime", currentTime);
    };

    useEffect(() => {
        const id = setInterval(timer, 1000);
        return () => {
            clearInterval(id);
        };
    }, [newTime]);

    const results = [];

    // results.push(differenceInMonths(finishTime, currentTime));
    results.push(differenceInDays(finishTime, currentTime));
    results.push(differenceInHours(finishTime, currentTime));
    results.push(differenceInMinutes(finishTime, currentTime));
    results.push(differenceInSeconds(finishTime, currentTime));

    // const monthsRemaining = results[4] / (30 * 24 * 3600);
    const daysRemaining = results[3] / (24 * 3600);
    const hoursRemaining = (daysRemaining % 1) * 24;
    const minutesRemaining = (hoursRemaining % 1) * 60;
    const secondsRemaining = (minutesRemaining % 1) * 60;

    return (
        // console.log(currentTime),
        getUpatesfromChild(currentTime),
        (
            <div>
                {/* {Math.round(monthsRemaining)} Months :{" "} */}
                {Math.floor(daysRemaining)} days : {Math.floor(hoursRemaining)}{" "}
                hours : {Math.floor(minutesRemaining)} minutes :{" "}
                {Math.floor(secondsRemaining)} seconds
            </div>
        )
    );
}

export default FirstTimer2;
