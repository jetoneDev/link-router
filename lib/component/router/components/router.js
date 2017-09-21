'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _logger2.default("Router");

var Router = function (_Component) {
    _inherits(Router, _Component);

    function Router(props) {
        _classCallCheck(this, Router);

        var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

        _this.unlisten = null;
        _this.matchPath = _this.matchPath.bind(_this);
        _this.initRoutes = _this.initRoutes.bind(_this);
        global.router = _this.props.history;
        _this.state = {
            history: _this.props.history,
            location: null,
            routes: _this.initRoutes(_this.props.routes) || null,
            routeComponent: null
        };
        return _this;
    }

    _createClass(Router, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.unlisten = this.props.history.listen(function (location, action) {
                // location is an object like window.location
                _this2.matchPath(location);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.matchPath(global.router.location);
        }
    }, {
        key: 'initRoutes',
        value: function initRoutes(params) {
            var json = {};
            for (var key in params) {
                json[key.toLowerCase()] = params[key];
            }
            logger.debug(params, json);
            return json;
        }
    }, {
        key: 'matchPath',
        value: function matchPath(params) {
            var me = this;
            var pathArray = params.pathname.match(/\/\w*/gi);
            logger.debug(pathArray);
            var myComponent = null;
            for (var i = pathArray.length - 1; i >= 0; i--) {
                var pathname = pathArray[i].toLowerCase();
                if (me.state.routes[pathname.toLowerCase()] == undefined) {
                    logger.debug("can't not matchRoute " + pathname);
                    myComponent = null;
                    break;
                }
                //前置执行
                if (me.props.onEntry) {
                    me.props.onEntry(me.state.history, params);
                }
                if (me.state.routes[pathname].onEntry) {
                    me.state.routes[pathname].onEntry(me.state.history, params);
                }
                //end
                myComponent = _react2.default.createElement(me.state.routes[pathname].component, {
                    location: params
                }, myComponent);
            }
            this.setState({
                location: params, routeComponent: myComponent
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.routeComponent != null ? this.state.routeComponent : _react2.default.createElement('div', null);
        }
    }]);

    return Router;
}(_react.Component);

Router.propTypes = {
    children: _react.PropTypes.object,
    history: _react.PropTypes.object,
    routes: _react.PropTypes.object,
    onEntry: _react.PropTypes.func
};

exports.default = Router;