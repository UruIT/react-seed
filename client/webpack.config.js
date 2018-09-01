const TARGET = process.env.npm_lifecycle_event;
const ENV = process.env.NODE_ENV;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start' || !TARGET || ENV === 'development') {
	module.exports = require('./config/webpack.config.dev');
} else if (TARGET === 'build' || ENV === 'production') {
	module.exports = require('./config/webpack.config.prod');
} else if (TARGET === 'stats') {
	module.exports = require('./config/webpack.config.stats');
} else if (TARGET === 'test' || TARGET === 'tdd') {
	module.exports = require('./config/webpack.config.test');
}
