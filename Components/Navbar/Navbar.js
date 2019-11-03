import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <header className="HomeNavBar">
      <div className="matchup center">matchup</div>
        <div className="btn-container">
          <Link to="/">
            <button className="home-btn">Home</button>
          </Link>
          <Link to="/">
            <button className="session-btn">Start a New Session</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
