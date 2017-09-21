'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashHistory = exports.Router = undefined;

var _router = require('./components/router');

var _router2 = _interopRequireDefault(_router);

var _routeHistory = require('./components/routeHistory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _router2.default;
exports.hashHistory = _routeHistory.hashHistory;