import React from "react";
import "./new-session.css";
import { csv } from "d3";

class NewSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentCsv: [],
      interviewerCsv: [],
      student: [],
      interviewer: []
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //add parameters within these ()
  runPairingAlgorithm = e => {
    e.preventDefault();
    csv(this.state.studentCsv).then(data => {
      this.setState({
        student: data
      });
    });
    csv(this.state.interviewerCsv).then(data => {
      this.setState({
        interviewer: data
      });
    });
    //code algorithm here
  };

  render() {
    return (
      <div className="NewSession">
        <h1>Start Your Session</h1>
        <form className="form2">
          <label className="Student">
            Upload Student Information:
            <input
              type="file"
              name="studentCsv"
              onChange={this.handleChange}
              value={this.state.studentCsv}
            />
          </label>
          <label className="Interviewer">
            Upload Interviewer Information:
            <input
              type="file"
              name="interviewerCsv"
              onChange={this.handleChange}
              value={this.state.interviewerCsv}
            />
          </label>
          <label className="Rounds">
            Expected number of rounds:
            <input type="text" name="rounds" />
          </label>
          <label className="GoogleFormLink">
            Google Form Link post interview:
            <input type="text" name="formLink" />
          </label>
          <label className="Submit2">
            <input
              type="submit"
              value="Submit"
              onClick={this.runPairingAlgorithm}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default NewSession;
