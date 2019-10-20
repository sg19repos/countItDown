import React, { useState } from "react";
import { format } from "date-fns";
// import InteractiveList from "./listWithDelete";
import OutlinedChips from "./chipWithDelete";
import { SnoozeChipsStyle, Ul } from "../styles/snoozeChipsStyles";
import Grid from "@material-ui/core/Grid";

function CheckPoint({ snoozeElements, finalArrayElement, getElementToDelete }) {
    return (
        <SnoozeChipsStyle>
            <Grid
                sm={3}
                xs={12}
                lg={4}
                container
                spacing={3}
                key={snoozeElements.indexOf(finalArrayElement)}
                id={snoozeElements.indexOf(finalArrayElement)}
            >
                <Grid item xs={6} sm={3}>
                    {/* <Paper className={classes.paper}>xs=12</Paper> */}
                    {OutlinedChips(
                        format(new Date(finalArrayElement), "dd-MMMM-yyyy p"),
                        snoozeElements.indexOf(finalArrayElement),
                        getElementToDelete
                    )}
                </Grid>
            </Grid>
        </SnoozeChipsStyle>
    );
}

export default CheckPoint;
