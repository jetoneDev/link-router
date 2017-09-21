
class Logger {
    constructor(loggerTag = "Default_Logger") {
        this.loggerTag = loggerTag + "_Logger";
    }
    log(...object) {
        if (object) {
            console.log(this.loggerTag, ...object);
        }
    }
    debug(...object) {
        if (object) {
            console.debug(this.loggerTag, ...object);
        }
    }
    ifLog(bool, success, fail) {
        bool ? this.log(success) : this.log(fail);
    }
    ifDebug(bool, success, fail) {
        bool ? this.debug(success) : this.debug(fail);
    }
    
}

export default Logger;
