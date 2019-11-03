import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import NewSession from "./routes/NewSession/new-session";
import Checkin from "./routes/Checkin/Checkin";
import Navbar from "./Components/Navbar/Navbar";
import CurrentSession from "./routes/CurrentSession/current-session";

const App = () => (
  <Router>
    <div
      id="Background"
      style={{
        background: "url(./Components/Web.png)",
        backgroundSize: "100% 800px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px -150px"
      }}
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-session" component={NewSession} />
        <Route path="/checkin" component={Checkin} />
        <Route path="/current-session" component={CurrentSession} />
      </Switch>
    </div>
  </Router>
);

export default App;
