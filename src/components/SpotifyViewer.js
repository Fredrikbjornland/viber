import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: 'white',
    },


}));

export const SpotifyViewer = ({ nowPlaying }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {nowPlaying &&
                <Grid container direction="column"  alignItems="center" spacing={6}>
                    <h1>
                        Now Playing: {nowPlaying.name}
                    </h1>
                    <Grid item className={classes.coverImage}>
                        <img
                            src={nowPlaying.albumArt}
                            style={{ height: 150 }}
                            alt={nowPlaying.name}
                        />
                    </Grid>
                </Grid>}
        </Grid>
    );
};