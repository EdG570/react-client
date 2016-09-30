'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForecastList = function (_Component) {
  _inherits(ForecastList, _Component);

  function ForecastList() {
    _classCallCheck(this, ForecastList);

    return _possibleConstructorReturn(this, (ForecastList.__proto__ || Object.getPrototypeOf(ForecastList)).apply(this, arguments));
  }

  _createClass(ForecastList, [{
    key: 'forecastList',
    value: function forecastList() {
      var _this2 = this;

      var forecastDays = this.props.forecastWeather.days.map(function (day, index) {

        return _react2.default.createElement(
          'li',
          { key: index, onClick: function onClick() {
              return _this2.props.showWeatherDetails(day);
            } },
          _react2.default.createElement('img', { src: 'http://icons.wxug.com/i/c/a/' + day.icon + '.gif', alt: 'Weather image' }),
          _react2.default.createElement(
            'p',
            null,
            day.title
          )
        );
      });

      return forecastDays;
    }
  }, {
    key: 'render',
    value: function render() {
      var list = this.forecastList();

      return _react2.default.createElement(
        'ul',
        null,
        list
      );
    }
  }]);

  return ForecastList;
}(_react.Component);

;

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ showWeatherDetails: _index.showWeatherDetails }, dispatch);
}

function mapStateToProps(state) {
  return {
    forecastWeather: state.forecastWeather
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ForecastList);

//# sourceMappingURL=forecast_list-compiled.js.map