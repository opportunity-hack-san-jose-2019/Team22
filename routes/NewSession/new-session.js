import React from "react";
import "./new-session.css";

class NewSession extends React.Component {
    render() {
        return (
            <div className="NewSession">
                <h1>Start Your Session</h1>
                <form className="form2">
                    <label className="Student">
                        Upload Student Information:
                        <input type="text" name="name" />
                    </label>
                    <label className="Interviewer">
                        Upload Interviewer Information:
                        <input type="text" name="name" />
                    </label>
                    <label className="Rounds">
                        Expected number of rounds:
                        <input type="text" name="name" />
                    </label>
                    <label className="GoogleFormLink">
                        Google Form Link post interview:
                        <input type="text" name="name" />
                    </label>
                    <label className="Submit2">
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default NewSession;
