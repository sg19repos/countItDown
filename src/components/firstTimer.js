import React from "react";
import {
    format,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds
} from "date-fns";

function FirstTimer() {
    const finishTime = format(new Date("01/01/2020"), "MM/dd/yyyy");
    const currentTime = format(new Date(), "MM/dd/yyyy");

    const timesArray = ["Year", "Month", "Day", "Hour", "Minute", "Second"];

    const results = [];

    timesArray.map(timeUnit => {
        // console.log(
        //     "`differenceIn${timeUnit}s`(finishTime, currentTime)",
        //     `differenceIn${timeUnit}s`,
        //     finishTime,
        //     currentTime
        // );
        console.log(`differenceIn${timeUnit}s(${finishTime}, ${currentTime})`);
        let functionName = "differenceIn" + { timeUnit } + "s";
        let func = new Function(functionName);
        console.log("func", func, typeof func);
        // console.log("functionName", functionName, typeof functionName);
        results.push(func(finishTime, currentTime));
        console.log("results", results);
        return results;
    });
}

export default FirstTimer;
