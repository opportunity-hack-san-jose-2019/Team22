import React from "react";
import "./Checkin.css";
import Papa from "papaparse";
import { csv } from "d3";

class Checkin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isStudent: false
    };
  }

  getCsvData = e => {
    e.preventDefault();
    csv("./../../data/Student.csv")
      .then(data => {
        console.log(data);
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
            <input type="text" name="name" placeholder="Full Name" />
          </label>
          <label className="Submit">
            <input type="submit" value="Submit" onClick={this.getCsvData} />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkin;
