import React from 'react';
import { LoginPage } from '../components/LoginPage';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100vw',
    },
    splitPage: {
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        color: 'white',
        textAlign: 'center',
    },
}));


export const HomePage = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid container xs={6} alignItems="center" className={classes.splitPage}>
                <Grid item xs={12} className={classes.textContainer}>
                    <h1>Viber</h1>
                    <p>Watch musicvideos</p>
                    <p>See lyrics</p>
                </Grid>
            </Grid>
            <Grid container xs={6} alignItems="center" className={classes.splitPage}>
                <Grid item xc={12} className={classes.loginContainer}>
                    <LoginPage />
                </Grid>
            </Grid>
        </Grid>
    )
}
