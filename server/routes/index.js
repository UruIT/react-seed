module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	app.use('/api/report', require('./report.route'));
	// Add routes here
}
