import React from "react";
import "./Checkin.css";
import Papa from "papaparse";
import { csv } from "d3";
import { Link } from "react-router-dom";

class Checkin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role: "",
      studentCount: 0,
      interviewerCount: 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getCsvData = e => {
    if (this.state.role === "Student") {
      csv("./../../data/Student.csv")
        .then(data => {
          let student = "";
          for (student of data) {
            if (this.state.name === student["Full Name"]) {
              this.setState(prevState => ({
                studentCount: prevState.studentCount + 1
              }));
              window.localStorage.setItem(
                "student",
                JSON.stringify(this.state.studentCount)
              );
              alert("Thank you for checking in!");
              break;
            }
          }
          console.log(this.state.studentCount);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      csv("./../../data/Interviewers.csv")
        .then(data => {
          let interviewer = "";
          for (interviewer of data) {
            if (this.state.name === interviewer["Name"]) {
              this.setState(prevState => ({
                interviewerCount: prevState.interviewerCount + 1
              }));
              window.localStorage.setItem(
                "interviewer",
                JSON.stringify(this.state.interviewerCount)
              );
              alert("Thank you for checking in!");
              break;
            }
          }
          console.log(this.state.interviewerCount);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="Checkin">
        <h1>Check in to your Session</h1>
        <form className="form">
          <label className="SessionCode">
            Session Code:
            <input type="text" name="name" placeholder="Session Code" />
          </label>
          <label className="Email">
            Full Name:
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={this.state.fullName}
              onChange={this.handleChange}
              required
            />
          </label>
          <div className="radio-btn-container">
            <label className="radio-btn">
              Student
              <input
                type="radio"
                name="role"
                value="Student"
                onChange={this.handleChange}
              />
            </label>
            <label className="radio-btn">
              Interviewer
              <input
                type="radio"
                name="role"
                value="Interviewer"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <Link to="/current-session" onClick={this.getCsvData}>
            <label className="Submit">
              <input type="submit" value="Submit" />
            </label>
          </Link>
        </form>
      </div>
    );
  }
}

export default Checkin;
