module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	app.use('/api/translations', require('./translation.route'));
	// Add routes here
};
