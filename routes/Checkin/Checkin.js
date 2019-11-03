import React from "react";
import "./Checkin.css";
import Papa from "papaparse";
import { csv } from "d3";

class Checkin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      role: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getCsvData = e => {
    e.preventDefault();
    csv("./../../data/Student.csv")
      .then(data => {
        console.log(data);
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
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
          <label className="Submit">
            <input type="submit" value="Submit" onClick={this.getCsvData} />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkin;
