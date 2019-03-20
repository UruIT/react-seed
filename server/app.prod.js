const express = require('express');
const path = require('path');

const {
	configureAuth,
	configureBodyParser,
	configureCompression,
	configureCors,
	configureErrorHandler
} = require('./utils/app.configure');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();

init(app);

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => res.sendFile(HTML_FILE));

function init(app) {
	configureAuth(app);
	configureCors(app);
	configureBodyParser(app);
	configureErrorHandler(app);
	configureCompression(app);

	require('./routes')(app);
}

module.exports = app;
