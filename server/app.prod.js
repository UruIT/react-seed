const express = require('express');
const http = require('http');
const path = require('path');

const logger = require('./utils/logger');
const appConfig = require('./config');

const {
	configureBodyParser,
	configureCompression,
	configureCors,
	configureErrorHandler
} = require('./utils/app.configure');

const DIST_DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();

init(app);

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => res.sendFile(HTML_FILE));

setupServer(app);

function setupServer(app) {
	app.set('x-powered-by', false);
	http.createServer(app).listen(appConfig.port);
	logger.info('http://localhost:' + appConfig.port);
}

function init(app) {
	configureCors(app);
	configureBodyParser(app);
	configureErrorHandler(app);
	configureCompression(app);

	require('./routes')(app);
}

module.exports = app;
