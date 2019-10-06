import React, { useState, useEffect, Fragment, useRef } from "react";
// import { format } from "date-fns";

// import FormatDateTest from "./formatDateTest";
// import FirstTimer from "./firstTimer";
import FirstTimer2 from "./firstTimer2";
import AddNewCheckPoint from "./addNewCheckPoint";
import sound from "../sounds/analog-watch-alarm_daniel-simion.mp3";

// const newYears = new Date("2019/01/02");
// const formattedDate = format(newYears, "MM/dd/yyyy");

function Home() {
    // const daysToCountDown = 100;
    // const hoursToCountDown = daysToCountDown * 24;
    // const minutesToCountDown = hoursToCountDown * 60;
    // const secondsToCountDown = minutesToCountDown * 60;

    // const secondsToCountDown = 86400;
    // const [newTime, setNewTime] = useState(secondsToCountDown);

    // const timer = () => setNewTime(newTime - 1);

    // const newTime = 100;
    // useEffect(() => {
    //     if (newTime < 0) {
    //         return;
    //     }
    //     // const id = setInterval(timer, 1000);
    //     return () => {
    //         clearInterval(100);
    //     };
    // }, [newTime]);

    const currentTime = localStorage.getItem("currentTime");
    const snoozeList = localStorage.getItem("SnoozeArray");

    const audioElement = useRef(null);

    // const soundfile = `/sounds/analog-watch-alarm_daniel-simion.mp3`;

    // console.log("soundfile", soundfile);

    // snoozeList?JSON.parse(snoozeList).snoozeArray:;

    // useEffect(() => {
    //     console.log("rendered");
    //     if (snoozeList != null) {
    //         JSON.parse(snoozeList).snoozeArray.map(snoozeElement => {
    //             console.log("before if");
    //             console.log("1", new Date(snoozeElement).toString());
    //             console.log("2", new Date(currentTime).toString());
    //             console.log(
    //                 new Date(snoozeElement).toString() ==
    //                     new Date(currentTime).toString()
    //             );
    //             if (
    //                 new Date(snoozeElement).toString() ==
    //                 new Date(currentTime).toString()
    //             ) {
    //                 console.log("Triggered");
    //             }
    //         });
    //     }
    //     return () => {};
    // }, []);

    const getUpatesfromChild = currentTime => {
        if (snoozeList != null) {
            JSON.parse(snoozeList).snoozeArray.map(snoozeElement => {
                if (
                    new Date(snoozeElement).toString() ==
                    new Date(currentTime).toString()
                ) {
                    audioElement.current.play();
                }
            });
        }
    };

    return (
        <Fragment>
            {/* <div>
                {daysToCountDown} : {hoursToCountDown} : {minutesToCountDown} :
                {secondsToCountDown}
            </div>
            <h5>{newTime}</h5> */}
            {/* <h5> */}
            {/* <FormatDateTest /> */}
            {/* <FirstTimer /> */}
            <audio hidden src={sound} controls ref={audioElement}></audio>
            <FirstTimer2 getUpatesfromChild={getUpatesfromChild} />
            <AddNewCheckPoint />
            {/* </h5> */}
        </Fragment>
    );
}

export default Home;
