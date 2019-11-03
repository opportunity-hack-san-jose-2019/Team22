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
            Interviewers Checked In: 2 {interviewerCount}
          </div>
          <div className="check-in-item">
            Students Checked In: 2 {studentCount}
          </div>
        </div>
        <div className="matchup-container">
          <div className="header-matchup-container">Current Matchups: 2</div>

          <div className="pair-container">
            <div className="pair-container-item">Interviewers:</div>
            <div className="pair-container-item">Students:</div>
          </div>
          <div className="pair-container">
            <div className="pair-container-item">John Doe</div>
            <div className="pair-container-item">Bob Sagget</div>
          </div>
          <div className="pair-container">
           <div className="pair-container-item">Joe Biden</div>
            <div className="pair-container-item">Duck Sam</div>
          </div>
          <button id="share" style={{marginTop: "20px"}}>New Matchup</button>
        </div>
      </div>
    );
  }
}

export default CurrentSession;
