import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { AuthProvider } from "./helper/Auth";
import ReactDOM from "react-dom";
import HomeInUp from "./Page/HomeInUp/HomeInUp";
import Settings from "./Page/Settings/Settings";
import App from "./App";
import Feeds from "./Page/Feeds/Feeds";
import Explore from "./Page/Explore/Explore";
import Profileupdate from "./Page/profileupdate/profileupdate";
import Page from "./Page/Page";
import Main from "./Page/Main/Main";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";
import Post from "./Page/Post/Post";
import Forget_password from "./Page/Forget_password/Forget_password";
import PrivateRouteToLogin from "./helper/PrivateRouteToLogin";
import PrivateRouteToFirst from "./helper/PrivateRouteToFirst";
import Test from "./Page/Test/Test";
import Album from "./Page/Album/Album";
const routing = (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/gotologoin" component={HomeInUp} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/page" component={Page} />
        <Route path="/forgetpassword" component={Forget_password} />
        <PrivateRouteToFirst path="/settings" component={Settings} />
        <PrivateRouteToLogin path="/explore" component={Explore} />
        <PrivateRouteToLogin path="/feed" component={Feeds} />
        <PrivateRouteToLogin path="/profileupdate" component={Profileupdate} />
        <PrivateRouteToLogin path="/album" component={Album} />
        <PrivateRouteToFirst path="/home" component={Main} />
        <PrivateRouteToFirst path="/post" component={Post} />
        <PrivateRouteToFirst path="/test" component={Test} />
      </Switch>
    </Router>
  </AuthProvider>
);
ReactDOM.render(routing, document.getElementById("root"));
// document.title ="Home"
