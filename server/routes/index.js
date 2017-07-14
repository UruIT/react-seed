module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	app.use('/api/icon', require('./icon.route'));
	// Add routes here
}
