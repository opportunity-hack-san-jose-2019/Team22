import React from "react";
import "./Checkin.css"

class Checkin extends React.Component {
    render() {
        return (
            <div className="Checkin">
                <h1>Check in to your Session</h1>
                <form>
                    <label>
                        Session Code:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Checkin;
