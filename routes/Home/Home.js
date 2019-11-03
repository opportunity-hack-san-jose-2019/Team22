import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Home.css';
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div id='home'>
        <div id="welcome">
            <h1>
              Welcome to Matchup!
            </h1>
              <p1>
                We've created a tool specifically for Braven to help
                with their mock interview pairings.
              </p1>
          <div id="checkIn">
            <h1>
                Student or Interviewer Check In
            </h1>
            <p>
              Here to check in for your interview matchup?
            </p>
              <Link to="/checkin">
                  <button id="checkIn-btn">Check In!</button>
              </Link>
          </div>
        </div>
      <div id="info">
        <h1>Let's get Started</h1>
          <div className="numberCircle">1</div>
          <p>
              To begin a new session, upload your most current CSV file
              for students and interviewers.</p>

          <div className="numberCircle">2</div>
          <p>
              Once uploaded, press create session and a text message
              will be sent out to all of your attendees to check-in or cancel. </p>
          <div className="numberCircle">3</div>
          <p>
              Keep the page open during your session! Those attendees
              checked in will be kept track of on this page, you can
              press the match-up button whenever you’re ready to
              assign interviews.</p>
        </div>
      </div>
    );
  }
}

export default Home;
