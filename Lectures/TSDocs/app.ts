enum LogLevel5 {
  DEBUG = "DEBUG",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

function log5(message: string, level: LogLevel5) {
  console.log(`${LogLevel5[level]}: ${message}`);
}

log5("Hello", LogLevel5.DEBUG);
