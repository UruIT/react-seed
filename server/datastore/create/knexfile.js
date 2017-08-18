const path = require('path');

const connection = {
	client: 'postgresql',
	connection: {
		host: 'localhost',
		user: 'postgres',
		password: 'sa.pg.01',
		database: 'postgres'
	},
	seeds: {
		directory: path.resolve(__dirname, './seeds')
	}
};

module.exports = connection;
