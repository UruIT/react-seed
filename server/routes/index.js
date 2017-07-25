module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	// Add routes here
};
