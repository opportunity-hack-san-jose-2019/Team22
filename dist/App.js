import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import NewSession from "./routes/NewSession/new-session";
import Checkin from "./routes/Checkin/Checkin";
import Navbar from "./Components/Navbar/Navbar";
import CurrentSession from "./routes/CurrentSession/current-session";
import "./App.css";

var App = function App() {
  return React.createElement(Router, null, React.createElement("div", {
    id: "Background"
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