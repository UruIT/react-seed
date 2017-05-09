const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start' || !TARGET) {
    module.exports = require('./config/webpack.config.dev');
}
if (TARGET === 'build' || TARGET === 'stats') {
    module.exports = require('./config/webpack.config.prod');
}
if (TARGET === 'test' || TARGET === 'tdd') {
    module.exports = require('./config/webpack.config.test');
}
