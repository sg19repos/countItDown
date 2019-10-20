import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MaterialUIPickers from "./dateTimePicker";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export default function SnoozeInputFields() {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <MaterialUIPickers />
        </form>
    );
}
