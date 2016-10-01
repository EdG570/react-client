'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentDay = function CurrentDay() {

  var getCurrentDayIndex = function getCurrentDayIndex() {
    return new Date().getDay();
  };

  var convertIndexToDay = function convertIndexToDay(index) {
    var indexDayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    return indexDayList[index];
  };

  var currentDay = convertIndexToDay(getCurrentDayIndex());

  return _react2.default.createElement(
    'h3',
    null,
    currentDay
  );
};

exports.default = CurrentDay;

//# sourceMappingURL=current_day-compiled.js.map