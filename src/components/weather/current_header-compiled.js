'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentHeader = function CurrentHeader(_ref) {
  var weather = _ref.weather;


  var currentDescription = weather.description.toUpperCase();
  var city = weather.location.toUpperCase();

  return _react2.default.createElement(
    'p',
    { className: 'clearfix' },
    _react2.default.createElement(
      'span',
      null,
      city
    ),
    _react2.default.createElement(
      'span',
      null,
      currentDescription
    )
  );
};

exports.default = CurrentHeader;

//# sourceMappingURL=current_header-compiled.js.map