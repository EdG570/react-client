'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_current_weather = require('./reducer_current_weather');

var _reducer_current_weather2 = _interopRequireDefault(_reducer_current_weather);

var _reducer_forecast_weather = require('./reducer_forecast_weather');

var _reducer_forecast_weather2 = _interopRequireDefault(_reducer_forecast_weather);

var _reducer_weather_details = require('./reducer_weather_details');

var _reducer_weather_details2 = _interopRequireDefault(_reducer_weather_details);

var _reducer_app = require('./reducer_app');

var _reducer_app2 = _interopRequireDefault(_reducer_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  currentWeather: _reducer_current_weather2.default,
  forecastWeather: _reducer_forecast_weather2.default,
  forecastDetails: _reducer_weather_details2.default,
  app: _reducer_app2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map