"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        var loggerTag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Default_Logger";

        _classCallCheck(this, Logger);

        this.loggerTag = loggerTag + "_Logger";
    }

    _createClass(Logger, [{
        key: "log",
        value: function log() {
            for (var _len = arguments.length, object = Array(_len), _key = 0; _key < _len; _key++) {
                object[_key] = arguments[_key];
            }

            if (object) {
                var _console;

                (_console = console).log.apply(_console, [this.loggerTag].concat(object));
            }
        }
    }, {
        key: "debug",
        value: function debug() {
            for (var _len2 = arguments.length, object = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                object[_key2] = arguments[_key2];
            }

            if (object) {
                var _console2;

                (_console2 = console).debug.apply(_console2, [this.loggerTag].concat(object));
            }
        }
    }, {
        key: "ifLog",
        value: function ifLog(bool, success, fail) {
            bool ? this.log(success) : this.log(fail);
        }
    }, {
        key: "ifDebug",
        value: function ifDebug(bool, success, fail) {
            bool ? this.debug(success) : this.debug(fail);
        }
    }]);

    return Logger;
}();

exports.default = Logger;