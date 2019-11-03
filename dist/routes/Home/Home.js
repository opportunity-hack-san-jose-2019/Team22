function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "home"
      }, React.createElement("div", {
        className: "AlignHome"
      }, React.createElement("div", {
        id: "welcome"
      }, React.createElement("h1", null, "Welcome to Matchup!"), React.createElement("p1", null, "We've created a tool specifically for Braven to help with their mock interview pairings.")), React.createElement("div", {
        id: "checkIn"
      }, React.createElement("h1", null, "Student or Interviewer Check In"), React.createElement("p", null, "Here to check in for your interview matchup?"), React.createElement(Link, {
        to: "/checkin"
      }, React.createElement("button", {
        id: "checkIn-btn"
      }, "Check In!")))), React.createElement("div", {
        id: "info"
      }, React.createElement("h1", null, "Let's get Started"), React.createElement("div", {
        className: "numberCircle"
      }, "1"), React.createElement("p", null, "To begin a new session, upload your most current CSV file for students and interviewers."), React.createElement("div", {
        className: "numberCircle"
      }, "2"), React.createElement("p", null, "Once uploaded, press create session and a text message will be sent out to all of your attendees to check-in or cancel.", " "), React.createElement("div", {
        className: "numberCircle"
      }, "3"), React.createElement("p", null, "Keep the page open during your session! Those attendees checked in will be kept track of on this page, you can press the match-up button whenever you\u2019re ready to assign interviews.")));
    }
  }]);

  return Home;
}(React.Component);

export default Home;