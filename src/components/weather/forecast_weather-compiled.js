'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _forecast_list = require('../../containers/weather/forecast_list');

var _forecast_list2 = _interopRequireDefault(_forecast_list);

var _forecast_detail = require('./forecast_detail');

var _forecast_detail2 = _interopRequireDefault(_forecast_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForecastWeather = function ForecastWeather(_ref) {
  var weather = _ref.weather;
  var forecastDetails = _ref.forecastDetails;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_forecast_list2.default, { weather: weather }),
    _react2.default.createElement(_forecast_detail2.default, { forecastDetails: forecastDetails })
  );
};

ForecastWeather.propTypes = {
  weather: _react2.default.PropTypes.object.isRequired,
  forecastDetails: _react2.default.PropTypes.object.isRequired

};

exports.default = ForecastWeather;

//# sourceMappingURL=forecast_weather-compiled.js.map