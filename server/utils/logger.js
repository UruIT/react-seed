var winston = require('winston');

var logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true,
			timestamp: true,
			prettyPrint: true
		})
	]
});

module.exports = logger;
