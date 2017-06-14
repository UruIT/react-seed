const http = require('http');

const app = require('./app.prod');
const appConfig = require('./config');
const logger = require('./utils/logger');

app.set('x-powered-by', false);
http.createServer(app).listen(appConfig.port);
logger.info(`http://localhost:${appConfig.port}`);
