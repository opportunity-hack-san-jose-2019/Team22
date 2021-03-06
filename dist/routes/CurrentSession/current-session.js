function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from "react";
import "./current-session.css";

var CurrentSession =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrentSession, _React$Component);

  function CurrentSession() {
    _classCallCheck(this, CurrentSession);

    return _possibleConstructorReturn(this, _getPrototypeOf(CurrentSession).apply(this, arguments));
  }

  _createClass(CurrentSession, [{
    key: "getData",
    value: function getData() {
      var databody = {};
      return fetch("http://localhost:5000/Braven-Data/Student", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var interviewerCount = window.localStorage.getItem("interviewer");
      var studentCount = window.localStorage.getItem("student");
      this.getData();
      return React.createElement("div", {
        className: "main-container"
      }, React.createElement("div", {
        className: "header-main-container"
      }, "Session Information", React.createElement("button", {
        id: "share"
      }, "Share Session")), React.createElement("div", {
        className: "check-in-container"
      }, React.createElement("div", {
        className: "check-in-item"
      }, "Interviewers Checked In: 2 ", interviewerCount), React.createElement("div", {
        className: "check-in-item"
      }, "Students Checked In: 2 ", studentCount)), React.createElement("div", {
        className: "matchup-container"
      }, React.createElement("div", {
        className: "header-matchup-container"
      }, "Current Matchups: 2"), React.createElement("div", {
        className: "pair-container"
      }, React.createElement("div", {
        className: "pair-container-item"
      }, "Interviewers:"), React.createElement("div", {
        className: "pair-container-item"
      }, "Students:")), React.createElement("div", {
        className: "pair-container"
      }, React.createElement("div", {
        className: "pair-container-item"
      }, "John Doe"), React.createElement("div", {
        className: "pair-container-item"
      }, "Bob Sagget")), React.createElement("div", {
        className: "pair-container"
      }, React.createElement("div", {
        className: "pair-container-item"
      }, "Joe Biden"), React.createElement("div", {
        className: "pair-container-item"
      }, "Duck Sam")), React.createElement("button", {
        id: "share",
        style: {
          marginTop: "20px"
        }
      }, "New Matchup")));
    }
  }]);

  return CurrentSession;
}(React.Component);

export default CurrentSession;