"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForecastDetail = function ForecastDetail(_ref) {
  var forecastDetails = _ref.forecastDetails;


  return _react2.default.createElement(
    "div",
    { className: "forecast-details" },
    _react2.default.createElement(
      "p",
      null,
      forecastDetails.day.fcttext
    )
  );
};

exports.default = ForecastDetail;

//# sourceMappingURL=forecast_detail-compiled.js.map