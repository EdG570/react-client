'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _current_weather = require('./current_weather');

var _current_weather2 = _interopRequireDefault(_current_weather);

var _current_day = require('./current_day');

var _current_day2 = _interopRequireDefault(_current_day);

var _forecast_weather = require('./forecast_weather');

var _forecast_weather2 = _interopRequireDefault(_forecast_weather);

var _index = require('../../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weather = function (_Component) {
  _inherits(Weather, _Component);

  function Weather() {
    _classCallCheck(this, Weather);

    return _possibleConstructorReturn(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).apply(this, arguments));
  }

  _createClass(Weather, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchCurrentWeather();
      this.props.fetchForecastWeather();
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.forecastWeather.isFetching || this.props.currentWeather.isFetching) {
        return _react2.default.createElement(
          'div',
          { id: 'weather-spinner' },
          _react2.default.createElement('img', { src: '../../src/assets/loading.gif', alt: 'Loading image' })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'weather-box' },
        _react2.default.createElement(_current_day2.default, null),
        _react2.default.createElement(_current_weather2.default, null),
        _react2.default.createElement(_forecast_weather2.default, null)
      );
    }
  }]);

  return Weather;
}(_react.Component);

;

function mapStateToProps(state) {
  return {
    forecastWeather: state.forecastWeather,
    currentWeather: state.currentWeather
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchCurrentWeather: _index.fetchCurrentWeather,
    fetchForecastWeather: _index.fetchForecastWeather
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Weather);

//# sourceMappingURL=weather-compiled.js.map