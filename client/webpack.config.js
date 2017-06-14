const TARGET = process.env.npm_lifecycle_event;
const ENV = process.env.NODE_ENV;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start' || !TARGET || ENV === 'development') {
	module.exports = require('./config/webpack.config.dev');
}
if (TARGET === 'build' || TARGET === 'stats' || ENV === 'production') {
	module.exports = require('./config/webpack.config.prod');
}
if (TARGET === 'test' || TARGET === 'tdd') {
	module.exports = require('./config/webpack.config.test');
}
