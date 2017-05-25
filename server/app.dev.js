const path = require('path');
const express = require('express');
const http = require('http');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const DEVELOPMENT = 'development';

if (process.env.NODE_ENV !== DEVELOPMENT) {
	console.warn(`incorrect NODE_ENV=${process.env.NODE_ENV}... change to ${DEVELOPMENT}`);
	process.env.NODE_ENV = DEVELOPMENT;
}

const wpConfig = require('../webpack.config');
const appConfig = require('./config');

wpConfig.entry.app.unshift('webpack/hot/dev-server', 'webpack-hot-middleware/client');
const HTML_FILE = path.join(wpConfig.output.path, 'index.html');

const compiler = webpack(wpConfig);

const app = express();

app.use(webpackDevMiddleware(compiler, {
	publicPath: wpConfig.output.publicPath || '/',
	stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

app.use(function (err, req, res, next) {
	res.status(500).send('Error ' + err);
	return next();
});

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

module.exports = app;
