'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user_details_container = require('./user_details_container');

var _user_details_container2 = _interopRequireDefault(_user_details_container);

var _weather_container = require('./todos/weather/weather_container');

var _weather_container2 = _interopRequireDefault(_weather_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosMain = function TodosMain() {
  return _react2.default.createElement(
    'div',
    { className: 'clearfix' },
    _react2.default.createElement(_user_details_container2.default, null),
    _react2.default.createElement(_weather_container2.default, null)
  );
};

exports.default = TodosMain;

//# sourceMappingURL=todos_main-compiled.js.map