import React from "react";
import "./current-session.css";

class CurrentSession extends React.Component {
  getData() {
    let databody = {};

    return fetch("http://localhost:5000/Braven-Data/Student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    const interviewerCount = window.localStorage.getItem("interviewer");
    const studentCount = window.localStorage.getItem("student");

    this.getData();
    return (
      <div className="main-container">
        <div className="header-main-container">
          Session Information
          <button id="share">Share Session</button>
        </div>
        <div className="check-in-container">
          <div className="check-in-item">
            Interviewers Checked In: {interviewerCount}
          </div>
          <div className="check-in-item">
            Students Checked In: {studentCount}
          </div>
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
