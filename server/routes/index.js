module.exports = function(app) {
	app.use('/api/sample', require('./sample.route'));
	app.use('/api/item', require('./item.route'));
	// Add routes here
};
