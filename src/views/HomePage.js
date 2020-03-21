import React from 'react';
import { LoginPage } from '../components/LoginPage';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
                    <Typography variant="h1" component="h2" gutterBottom>
                        Viber
                    </Typography>
                    <Typography variant="h3" component="h3" gutterBottom>
                        Watch musicvideos
                    </Typography>
                    <Typography variant="h3" component="h3" gutterBottom>
                        See lyrics
                    </Typography>
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
