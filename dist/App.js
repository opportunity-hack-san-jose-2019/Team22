import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import NewSession from "./routes/NewSession/new-session";
import Checkin from "./routes/Checkin/Checkin";
import Navbar from "./Components/Navbar/Navbar";
import CurrentSession from "./routes/CurrentSession/current-session";

var App = function App() {
  return React.createElement(Router, null, React.createElement("div", {
    id: "Background",
    style: {
      background: "url(./Components/Web.png)",
      backgroundSize: "100% 800px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0px -150px"
    }
  }, React.createElement(Navbar, null), React.createElement(Switch, null, React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), React.createElement(Route, {
    path: "/new-session",
    component: NewSession
  }), React.createElement(Route, {
    path: "/checkin",
    component: Checkin
  }), React.createElement(Route, {
    path: "/current-session",
    component: CurrentSession
  }))));
};

export default App;