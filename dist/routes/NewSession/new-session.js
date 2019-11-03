function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import "./new-session.css";
import { csv } from "d3";

var NewSession =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewSession, _React$Component);

  function NewSession(props) {
    var _this;

    _classCallCheck(this, NewSession);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewSession).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "runPairingAlgorithm", function (e) {
      e.preventDefault();
      csv(_this.state.studentCsv).then(function (data) {
        _this.setState({
          student: data
        });
      });
      csv(_this.state.interviewerCsv).then(function (data) {
        _this.setState({
          interviewer: data
        });
      }); //code algorithm here
    });

    _this.state = {
      studentCsv: [],
      interviewerCsv: [],
      student: [],
      interviewer: []
    };
    return _this;
  }

  _createClass(NewSession, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "NewSession"
      }, React.createElement("h1", null, "Start Your Session"), React.createElement("form", {
        className: "form2"
      }, React.createElement("label", {
        className: "Student"
      }, "Upload Student Information:", React.createElement("input", {
        type: "file",
        name: "studentCsv",
        onChange: this.handleChange,
        value: this.state.studentCsv
      })), React.createElement("label", {
        className: "Interviewer"
      }, "Upload Interviewer Information:", React.createElement("input", {
        type: "file",
        name: "interviewerCsv",
        onChange: this.handleChange,
        value: this.state.interviewerCsv
      })), React.createElement("label", {
        className: "Rounds"
      }, "Expected number of rounds:", React.createElement("input", {
        type: "text",
        name: "rounds"
      })), React.createElement("label", {
        className: "GoogleFormLink"
      }, "Google Form Link post interview:", React.createElement("input", {
        type: "text",
        name: "formLink"
      })), React.createElement("label", {
        className: "Submit2"
      }, React.createElement("input", {
        type: "submit",
        value: "Submit",
        onClick: this.runPairingAlgorithm
      }))));
    }
  }]);

  return NewSession;
}(React.Component);

export default NewSession;