import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
    },
    loginButton: {
        textDecoration: 'none',
        color: 'black',
    }
  }));

export const LoginPage = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" size="large" color="primary.main" >
                <a href='http://localhost:8888' className={classes.loginButton}> Login to Spotify </a>
            </Button>
        </div >
    )
}