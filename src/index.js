import React from 'react';
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import { AuthProvider} from './helper/Auth'
import ReactDOM from 'react-dom';
import HomeInUp from './Page/HomeInUp/HomeInUp'
import Settings from './Page/Settings/Settings'
import App from './App';
import Feeds from './Page/Feeds/Feeds';
import Explore from './Page/Explore/Explore';
import Profile from './Page/Profile/Profile';
import Page from './Page/Page';
import Main from './Page/Main/Main'
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp'
import Post from './Page/Post/Post'
import PrivateRouteToLogin from './helper/PrivateRouteToLogin'
import PrivateRouteToFirst from './helper/PrivateRouteToFirst'
const routing = (
    <AuthProvider> 
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/gotologoin" component={HomeInUp}/>
            <PrivateRouteToFirst path="/settings" component={Settings}/>
            <PrivateRouteToLogin path="/explore" component={Explore}/>
            <PrivateRouteToLogin path="/feed" component={Feeds}/>
            <PrivateRouteToLogin path="/profile" component={Profile}/>
            <PrivateRouteToFirst path="/home" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRouteToFirst path="/post" component={Post}/>
            <Route path="/page" component={Page}/>
        </Switch>
    </Router>
    </AuthProvider>
)
ReactDOM.render(routing, document.getElementById('root'));
// document.title ="Home"
