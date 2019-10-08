import React, { Fragment, useRef } from "react";
import FirstTimer2 from "./firstTimer2";
import AddNewCheckPoint from "./addNewCheckPoint";
import sound from "../sounds/analog-watch-alarm_daniel-simion.mp3";

import InteractiveList from "./listWithDelete";

function Home() {
    const snoozeList = localStorage.getItem("SnoozeArray");
    const audioElement = useRef(null);
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
            <audio hidden src={sound} controls ref={audioElement}></audio>
            <FirstTimer2 getUpatesfromChild={getUpatesfromChild} />
            <AddNewCheckPoint />
        </Fragment>
    );
}

export default Home;
