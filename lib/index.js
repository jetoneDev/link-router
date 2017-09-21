'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashHistory = exports.Logger = exports.Router = undefined;

var _router = require('./component/router');

var _logger = require('./component/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _router.Router;
exports.Logger = _logger2.default;
exports.hashHistory = _router.hashHistory;