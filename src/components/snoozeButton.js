import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

export default function ButtonSizes(triggerClick) {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Fab
                    color="default"
                    background-color="default"
                    aria-label="add"
                    className={classes.margin}
                    onClick={triggerClick.triggerClick}
                >
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
}
