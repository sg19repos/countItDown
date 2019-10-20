import React, { Fragment, useRef } from "react";
import FirstTimer2 from "./firstTimer2";
import AddNewCheckPoint from "./addNewCheckPoint";
import sound from "../sounds/analog-watch-alarm_daniel-simion.mp3";
import TimerStyle from "../styles/timerStyle";
import HomeStyles from "../styles/HomeStyles";
import MainHeading from "./mainHeading";

function Home() {
    const snoozeList = localStorage.getItem("SnoozeArray");
    const audioElement = useRef(null);
    const getUpatesfromChild = currentTime => {
        if (snoozeList != null) {
            JSON.parse(snoozeList).snoozeArray.map(snoozeElement => {
                if (
                    new Date(snoozeElement).toString() == new Date().toString()
                ) {
                    audioElement.current.play();
                }
            });
        }
    };

    return (
        <Fragment>
            <HomeStyles>
                <MainHeading />
                <audio hidden src={sound} controls ref={audioElement}></audio>
                <TimerStyle>
                    <FirstTimer2 getUpatesfromChild={getUpatesfromChild} />
                </TimerStyle>
                <AddNewCheckPoint />
            </HomeStyles>
        </Fragment>
    );
}

export default Home;
