'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _signin = require('./containers/auth/signin');

var _signin2 = _interopRequireDefault(_signin);

var _forgot_password = require('./containers/auth/forgot_password');

var _forgot_password2 = _interopRequireDefault(_forgot_password);

var _signup = require('./containers/auth/signup');

var _signup2 = _interopRequireDefault(_signup);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _todos = require('./components/todos');

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/signin', component: _signin2.default }),
  ';',
  _react2.default.createElement(_reactRouter.Route, { path: '/forgotpassword', component: _forgot_password2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _signup2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/todos', component: _todos2.default })
);

//# sourceMappingURL=routes-compiled.js.map