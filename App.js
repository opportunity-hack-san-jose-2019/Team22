import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import NewSession from "./routes/new-session";
import Checkin from "./routes/Checkin/Checkin";
import Navbar from "./Components/Navbar/Navbar"


const App = () => (
  <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/new-session' component={NewSession}/>
          <Route path='/checkin' component={Checkin}/>
        </Switch>
      </div>
  </Router>
);

export default App;


