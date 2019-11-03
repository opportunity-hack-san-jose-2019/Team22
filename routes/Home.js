import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <div id="welcome">
        <h1>
          Welcome to Matchup!
        </h1>
          <div>
            We're creating a tool specifically for Braven to help
            with mock interview pairings.
          </div>
          <div id="checkIn">
          <div style={{fontSize: "25px"}}>
          Student or Interviewer CheckIn
          </div>
            <div>
              Here to check in for your interview matchup?
            </div>
            <button id="checkIn-btn">Check In!</button>
          </div>
        </div>
        <div id="info">
        <h2 style={{color: "#f06f78"}}>Let's get Started</h2>
          
        </div>
      </div>
    );
  }
}

export default Home;
