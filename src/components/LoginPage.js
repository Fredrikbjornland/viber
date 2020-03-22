import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
    },
    loginButton: {
        backgroundColor: theme.palette.secondary.main,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}));

export const LoginPage = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" className={classes.loginButton} size="large">
                <a href='https://youknowthevibes-server.herokuapp.com' className={classes.link}> Login to Spotify </a>
            </Button>
        </div >
    )
}
