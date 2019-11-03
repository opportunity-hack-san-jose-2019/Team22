import React from "react";
import "./current-session.css";

class CurrentSession extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="header-main-container">
          Session Information
          <button id="share">Share Session</button>
        </div>
        <div className="check-in-container">
          <div className="check-in-item">Interviewers Checked In :</div>
          <div className="check-in-item">Students Checked In: </div>
        </div>
        <div className="matchup-container">
          <div className="header-matchup-container">Current Matchups:</div>

          <div className="pair-container">
            <div className="pair-container-item">Interviewers:</div>
            <div className="pair-container-item">Students:</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSession;