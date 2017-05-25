
function configureCors(app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        res.header('Access-Control-Max-Age', '600');
        next();
    });
}

function configureBodyParser(app, bodyParser = require('body-parser')) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}

function configureErrorHandler(app, logger = require('./logger')) {
    app.use(function (err, req, res, next) {
        logger.error(err.stack);
        res.status(500).send('Unexpected error!');
        return next();
    });
}

function configureDevErrorHandler(app) {
	app.use(function (err, req, res, next) {
		res.status(500).send('Error ' + err);
		return next();
	});
}

function configureCompression(app) {
	const compression = require('compression');
	app.use(compression());
}

module.exports = {
	configureBodyParser,
	configureCompression,
	configureCors,
	configureDevErrorHandler,
	configureErrorHandler
};
