import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    }
}));

export default function OutlinedChips(snoozeTimeText, id, getElementToDelete) {
    const classes = useStyles();

    const handleDelete = () => {
        let result = window.confirm("Sure you want to delete?");
        if (result) {
            getElementToDelete(id);
        }
    };

    return (
        <div className={classes.root}>
            <Chip
                sm={3}
                xs={3}
                lg={4}
                label={snoozeTimeText.toString()}
                onDelete={() => handleDelete(id)}
                color="primary"
                variant="outlined"
                icon={<AccessAlarmIcon />}
            />
        </div>
    );
}
