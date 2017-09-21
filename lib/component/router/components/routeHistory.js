'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashHistory = undefined;

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashHistory = exports.hashHistory = (0, _createHashHistory2.default)();