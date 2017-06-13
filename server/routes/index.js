module.exports = function(app) {
	app.use('/api/user', require('./user.route'));
	// Add routes here
};
