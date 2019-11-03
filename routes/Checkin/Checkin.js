import React from "react";
import "./Checkin.css"

class Checkin extends React.Component {
    render() {
        return (
            <div className="Checkin">
                <h1>Check in to your Session</h1>
                <form className="form">
                    <label className="SessionCode">
                        Session Code:
                        <input type="text" name="name" />
                    </label>
                    <label className="Email">
                        Email:
                        <input type="text" name="name" />
                    </label>
                    <label className="Submit">
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Checkin;
