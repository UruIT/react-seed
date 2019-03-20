const bodyParser = require('body-parser');
const compression = require('compression');
const logger = require('./logger');
const cookieParser = require('cookie-parser');

function configureRequestLogger(app) {
	app.use((req, res, next) => {
		logger.info(req.method, req.originalUrl);
		next();
	});
}

function configureCors(app) {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
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
	app.use(function (err, req, res, next) {
		logger.error(err.stack);
		const status = (err && err.status) || 500;
		res.status(status).send(err.message);
		return next();
	});
}

function configureDevErrorHandler(app) {
	app.use(function (err, req, res, next) {
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

function configureAuth(app) {
	const APP_SECRET = 'This is secret, this should be an env variable, like a token, but for the whole app.';

	// Setup cookieParser
	app.use(cookieParser(APP_SECRET, {}));

	const validToken = 'validtoken';

	function validateJWT(jwt) {
		// ... jwt validation logic
		return jwt === validToken;
	}

	app.get('/login', (req, res) => {
		// At some point, when user authenticates we set an secure cookie
		res.cookie('jwt', validToken, {
			maxAge: 60000,
			httpOnly: true
		});

		res.cookie('expires', new Date(Date.now() + 60 * 60 * 1000), {
			maxAge: 10000,
		});

		res.send('Logged in');
	})

	app.get('/logout', (req, res) => {
		res.clearCookie('jwt');
		res.clearCookie('expires');
		res.send('Logged out');
	})

	app.get('/auth', (req, res) => {

		if (!validateJWT(req.cookies.jwt))
			return res.status(401) && res.end('Unauthorized access');

		res.send('This is protected content. If you see this you\'re authenticated.')
	})

}

module.exports = {
	configureBodyParser,
	configureAuth,
	configureCompression,
	configureCors,
	configureDevErrorHandler,
	configureErrorHandler,
	configureRequestLogger
};
