import React from 'react';
import { Main } from './components/Main';
import { makeStyles } from '@material-ui/core/styles';
import Image from './images/maxresdefault.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
