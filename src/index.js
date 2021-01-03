import React from 'react';
import ReactDOM from 'react-dom';
import HomeInUp from './Page/HomeInUp/HomeInUp'
import Settings from './Page/Settings/Settings'
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import App from './App';
import Feeds from './Page/Feeds/Feeds';
import Explore from './Page/Explore/Explore';
import Profile from './Page/Profile/Profile';
const routing = (

    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={HomeInUp}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/feed" component={Feeds}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
// document.title ="Home"
