const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const compression = require('compression');
const http = require('http');

const appConfig = require('./config');
const logger = require('./utils/logger');

const app = express();

const DIST_DIR = path.join(__dirname, '../build'),
	HTML_FILE = path.join(DIST_DIR, 'index.html'),
	isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const wpConfig = require('../webpack.config');

	const compiler = webpack(wpConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: wpConfig.output.publicPath || '/',
		stats: { colors: true }
	}));

	app.use(webpackHotMiddleware(compiler));

	require('./routes')(app);

	app.get('*', (req, res, next) => {
		compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
			if (err) { return next(); }

			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});

	http.createServer(app).listen(appConfig.port);
} else {
	app.use(express.static(DIST_DIR));

    setupServer(app);
	init(app);

	app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

function setupServer(app) {
    app.set('x-powered-by', false);
    http.createServer(app).listen(appConfig.port);
    logger.info('http://localhost:' + appConfig.port);
}

function configureCors(app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        res.header('Access-Control-Max-Age', '600');
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
        res.status(500).send('Unexpected error!');
        return next();
    });
}

function init(app) {
    configureCors(app);
    configureBodyParser(app);
    configureErrorHandler(app);

    app.use(compression());
    require('./routes')(app);
}

module.exports = app;
