module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	// Add routes here
	app.use('/api/translations', require('./translations.route'));
};
