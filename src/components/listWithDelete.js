import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
}));

function generate(element) {
    return [0].map(value =>
        React.cloneElement(element, {
            key: value
        })
    );
}

export default function InteractiveList(
    snoozeTimeText,
    id,
    getElementToDelete
) {
    console.log("id", id);

    const classes = useStyles();
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);

    const removeListElement = () => {
        getElementToDelete(id);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={snoozeTimeText.toString()}
                                        secondary={
                                            secondary ? "Secondary text" : null
                                        }
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                        >
                                            <DeleteIcon
                                                onClick={() =>
                                                    removeListElement(id)
                                                }
                                            />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
