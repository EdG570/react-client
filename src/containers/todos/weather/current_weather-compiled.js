'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _current_header = require('./current_header');

var _current_header2 = _interopRequireDefault(_current_header);

var _current_detail = require('./current_detail');

var _current_detail2 = _interopRequireDefault(_current_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentWeather = function CurrentWeather() {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_current_header2.default, null),
    _react2.default.createElement(_current_detail2.default, null)
  );
};

exports.default = CurrentWeather;

//# sourceMappingURL=current_weather-compiled.js.map