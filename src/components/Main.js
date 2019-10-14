import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { ShowVideos } from './ShowVideos';
import { LoginPage } from './LoginPage';



export const Main = () => (
    <Switch>
        <Route exact path="/" component = {ShowVideos} />
        <Route path="/ShowVideos" component={ShowVideos} />
        <Route path="/LoginPage" component={LoginPage} />
    </Switch>
)

