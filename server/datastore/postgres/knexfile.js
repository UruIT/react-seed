const path = require('path');
const config = require('../../config');

const connection = {
	client: 'postgresql',
	connection: `${config.database.connectionString}${config.database.name}`,
	migrations: {
		directory: path.resolve(__dirname, '../migrations')
	},
	seeds: {
		directory: path.resolve(__dirname, '../seeds')
	}
};

module.exports = connection;
