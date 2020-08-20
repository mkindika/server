const winston = require('winston');

var options = {
    file: {
      level: 'debug',
      filename: `~/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

export const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ]
});