import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import NewSession from "./routes/new-session";
import Checkin from "./routes/Checkin";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/new-session' component={NewSession}/>
      <Route path='/checkin' component={Checkin}/>
    </Switch>
  </Router>
);

export default App;


