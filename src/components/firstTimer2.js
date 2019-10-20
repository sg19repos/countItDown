import React, { useState, useEffect } from "react";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds
} from "date-fns";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        marginBottom: theme.spacing(1)
    },
    divider: {
        margin: theme.spacing(2, 0)
    }
}));

function FirstTimer2({ getUpatesfromChild }) {
    const classes = useStyles();
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

    results.push(differenceInDays(finishTime, currentTime));
    results.push(differenceInHours(finishTime, currentTime));
    results.push(differenceInMinutes(finishTime, currentTime));
    results.push(differenceInSeconds(finishTime, currentTime));

    const daysRemaining = results[3] / (24 * 3600);
    const hoursRemaining = (daysRemaining % 1) * 24;
    const minutesRemaining = (hoursRemaining % 1) * 60;
    const secondsRemaining = (minutesRemaining % 1) * 60;

    const timerUnitsArray = [
        daysRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining
    ];

    const timerUnitNameArray = ["days", "hours", "minutes", "seconds"];
    const timerMaxValueArray = [90, 24, 60, 60];

    const colorPicker = number => {
        if (Math.floor(number) > 70) return "#339966 ";
        else if (Math.floor(number) > 50 && Math.floor(number) < 71)
            return "#cccc00 ";
        else if (Math.floor(number) > 25 && Math.floor(number) < 51)
            return "#ffbb33 ";
        else return "#ff3333 ";
    };

    const timerGrid = (unitName, unitValue, maxValue) => {
        return (
            <Grid item sm={3} xs={12} lg={3}>
                <Paper
                    className={classes.paper}
                    style={{
                        backgroundImage:
                            `linear-gradient(to top, ` +
                            colorPicker(
                                (Math.floor(unitValue) / maxValue) * 100
                            ) +
                            (Math.floor(unitValue) / maxValue) * 100 +
                            `%, #f6f6f6 ` +
                            100 +
                            `%, #f6f6f6 100%)`
                    }}
                >
                    <p>{Math.floor(unitValue)}</p>
                    <h5>{unitName}</h5>
                </Paper>
            </Grid>
        );
    };

    return (
        getUpatesfromChild(currentTime),
        (
            <div>
                <Grid container spacing={3}>
                    {timerUnitsArray.map(timerUnit =>
                        timerGrid(
                            timerUnitNameArray[
                                timerUnitsArray.indexOf(timerUnit)
                            ],
                            timerUnit,
                            timerMaxValueArray[
                                timerUnitsArray.indexOf(timerUnit)
                            ]
                        )
                    )}
                </Grid>
            </div>
        )
    );
}

export default FirstTimer2;
