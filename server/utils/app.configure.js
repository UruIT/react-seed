const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('./logger');

function configureRequestLogger(app) {
	app.use((req, res, next) => {
		logger.info(req.method, req.originalUrl);
		next();
	});
}

function configureCors(app) {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header(
			'Access-Control-Allow-Methods',
			'POST, GET, PUT, DELETE, OPTIONS'
		);
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, Content-Type, Accept, Authorization'
		);
		res.header('Access-Control-Max-Age', '600');
		res.header('Referrer-Policy', 'no-referrer');
		res.header('X-Content-Type-Options', 'nosniff');
		res.header('X-Frame-Options', 'DENY');

		next();
	});
}

function configureBodyParser(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
}

function configureErrorHandler(app) {
	app.use(function(err, req, res, next) {
		logger.error(err.stack);
		const status = (err && err.status) || 500;
		res.status(status).send(err.message);
		return next();
	});
}

function configureDevErrorHandler(app) {
	app.use(function(err, req, res, next) {
		let message = `${err.message || ''}\nError Stack: ${err.stack}`;
		logger.error('Something went wrong: ', err.stack);
		const status = (err && err.status) || 500;
		res.status(status).send(message);
		return next(err);
	});
}

function configureCompression(app) {
	app.use(compression());
}

module.exports = {
	configureBodyParser,
	configureCompression,
	configureCors,
	configureDevErrorHandler,
	configureErrorHandler,
	configureRequestLogger
};
