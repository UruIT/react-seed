const path = require('path');
const express = require('express');
const http = require('http');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const {
	configureBodyParser,
	configureCors,
	configureDevErrorHandler,
	configureRequestLogger,
	connectDb
} = require('./utils/app.configure');

const DEVELOPMENT = 'development';
process.env.NODE_ENV = DEVELOPMENT;

const wpConfig = require('../client/webpack.config');
const appConfig = require('./config');

wpConfig.entry.app.unshift('webpack/hot/dev-server', 'webpack-hot-middleware/client');
const HTML_FILE = path.join(wpConfig.output.path, 'index.html');

const compiler = webpack(wpConfig);

const app = express();

configureRequestLogger(app);
configureBodyParser(app);
configureCors(app);

app.use(webpackDevMiddleware(compiler, {
	publicPath: wpConfig.output.publicPath || '/',
	stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

require('./routes')(app);

app.get('*', (req, res, next) => {
	compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
		if (err) {
			return next(err);
		}

		res.set('content-type', 'text/html');
		res.send(result);
		res.end();
	});
});

configureDevErrorHandler(app);
connectDb(appConfig.database);

http.createServer(app).listen(appConfig.port, () => {
	console.info('server listening at http://localhost:%s', appConfig.port);
});

module.exports = app;
