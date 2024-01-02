"use strict";
var LogLevel5;
(function (LogLevel5) {
  LogLevel5["DEBUG"] = "DEBUG1";
  LogLevel5["WARNING"] = "WARNING1";
  LogLevel5["ERROR"] = "ERROR1";
})(LogLevel5 || (LogLevel5 = {}));
function log5(message, level) {
  console.log(`${LogLevel5[level]}: ${message}`);
}
log5("Hello", LogLevel5.DEBUG);
