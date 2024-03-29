import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MUSICVIDEOS
                    </Typography>
                    <Button className={classes.button}>
                        <Link to="/ShowVideos"
                        className={classes.link}>Show Videos</Link>
                    </Button>
                    <Button className={classes.button}>
                        <Link to="/LoginPage"
                        className={classes.link}>Login</Link>
                    </Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}