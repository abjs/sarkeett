import React from 'react';
import ReactDOM from 'react-dom';
import HomeInUp from './Page/HomeInUp/HomeInUp'
import Settings from './Page/Settings/Settings'
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import App from './App';
const routing = (

    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={HomeInUp}/>
            <Route path="/settings" component={Settings}/>
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
// document.title ="Home"
