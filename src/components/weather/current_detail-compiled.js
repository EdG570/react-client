"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentDetails = function CurrentDetails(_ref) {
  var weather = _ref.weather;

  var currentTemp = roundTemp(weather.temp);
  var currentIconID = weather.iconID;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "clearfix current-weather" },
      _react2.default.createElement("img", { src: "http://icons.wxug.com/i/c/a/" + currentIconID + ".gif", alt: "Weather image" }),
      _react2.default.createElement(
        "h2",
        null,
        currentTemp,
        "°F"
      )
    )
  );
};

var roundTemp = function roundTemp(temp) {
  return Math.round(temp);
};

CurrentDetails.propTypes = {
  weather: _react2.default.PropTypes.object.isRequired
};

exports.default = CurrentDetails;

//# sourceMappingURL=current_detail-compiled.js.map