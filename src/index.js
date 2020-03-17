import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles/';
import muiTheme from './styles/muiTheme';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
