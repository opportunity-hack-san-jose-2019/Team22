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
import "./Checkin.css";
import Papa from "papaparse";
import { csv } from "d3";
import { Link } from "react-router-dom";

var Checkin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkin, _React$Component);

  function Checkin(props) {
    var _this;

    _classCallCheck(this, Checkin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "getCsvData", function (e) {
      if (_this.state.role === "Student") {
        csv("./../../data/Student.csv").then(function (data) {
          var student = "";
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              student = _step.value;

              if (_this.state.name === student["Full Name"]) {
                _this.setState(function (prevState) {
                  return {
                    studentCount: prevState.studentCount + 1
                  };
                });

                window.localStorage.setItem("student", JSON.stringify(_this.state.studentCount));
                alert("Thank you for checking in!");
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          console.log(_this.state.studentCount);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        csv("./../../data/Interviewers.csv").then(function (data) {
          var interviewer = "";
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              interviewer = _step2.value;

              if (_this.state.name === interviewer["Name"]) {
                _this.setState(function (prevState) {
                  return {
                    interviewerCount: prevState.interviewerCount + 1
                  };
                });

                window.localStorage.setItem("interviewer", JSON.stringify(_this.state.interviewerCount));
                alert("Thank you for checking in!");
                break;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          console.log(_this.state.interviewerCount);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    });

    _this.state = {
      name: "",
      role: "",
      studentCount: 0,
      interviewerCount: 0
    };
    return _this;
  }

  _createClass(Checkin, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "Checkin"
      }, React.createElement("h1", null, "Check in to your Session"), React.createElement("form", {
        className: "form"
      }, React.createElement("label", {
        className: "SessionCode"
      }, "Session Code:", React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Session Code"
      })), React.createElement("label", {
        className: "Email"
      }, "Full Name:", React.createElement("input", {
        type: "text",
        placeholder: "Full Name",
        name: "name",
        value: this.state.fullName,
        onChange: this.handleChange,
        required: true
      })), React.createElement("div", {
        className: "radio-btn-container"
      }, React.createElement("label", {
        className: "radio-btn"
      }, "Student", React.createElement("input", {
        type: "radio",
        name: "role",
        value: "Student",
        onChange: this.handleChange
      })), React.createElement("label", {
        className: "radio-btn"
      }, "Interviewer", React.createElement("input", {
        type: "radio",
        name: "role",
        value: "Interviewer",
        onChange: this.handleChange
      }))), React.createElement(Link, {
        to: "/current-session",
        onClick: this.getCsvData
      }, React.createElement("label", {
        className: "Submit"
      }, React.createElement("input", {
        type: "submit",
        value: "Submit"
      })))));
    }
  }]);

  return Checkin;
}(React.Component);

export default Checkin;