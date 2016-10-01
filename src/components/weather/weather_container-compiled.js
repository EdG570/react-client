'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _weather = require('../../containers/weather/weather');

var _weather2 = _interopRequireDefault(_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeatherContainer = function WeatherContainer() {
  return _react2.default.createElement(
    'div',
    { className: 'weather-container' },
    _react2.default.createElement(_weather2.default, null)
  );
};

exports.default = WeatherContainer;

//# sourceMappingURL=weather_container-compiled.js.map