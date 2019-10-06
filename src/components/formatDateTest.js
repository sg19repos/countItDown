import React, { useState, useEffect } from "react";
import {
    format,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds
} from "date-fns";

const newYears = new Date();
const formattedDate = format(newYears, "MM/dd/yyyy");

const deadLine = new Date("2020/01/01");
const formattedDeadLine = format(deadLine, "MM/dd/yyyy");

function FormatDateTest() {
    const [newTime, setNewTime] = useState(
        differenceInSeconds(deadLine, new Date())
    );
    // 8576752
    const timer = () => setNewTime(newTime - 1);
    useEffect(() => {
        if (differenceInSeconds(deadLine, new Date()) < 0) {
            return;
        }
        const id = setInterval(timer, 1000);
        return () => {
            clearInterval(id);
        };
    }, [newTime]);
    return (
        <div>
            Today it is - {formattedDate} and Deadline is {formattedDeadLine}
            <h5>
                Number of days left here :{" "}
                {differenceInDays(deadLine, new Date())}
            </h5>
            <h5>
                Number of hours left here :{" "}
                {differenceInHours(deadLine, new Date())}
            </h5>
            <h5>
                Number of minutes left here :{" "}
                {differenceInMinutes(deadLine, new Date())}
            </h5>
            <h5>
                Number of seconds left here :{" "}
                {differenceInSeconds(deadLine, new Date())}
            </h5>
        </div>
    );
}

export default FormatDateTest;
