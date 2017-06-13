const express = require('express');
const path = require('path');
const http = require('http');

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

function init(app) {
	configureCors(app);
	configureBodyParser(app);
	configureErrorHandler(app);
	configureCompression(app);

	require('./routes')(app);
}

module.exports = app;
