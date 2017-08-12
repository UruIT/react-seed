const path = require('path');
const config = require('../../config');

const connection = {
	client: 'mssql',
	connection: config.database.connectionString,
	migrations: {
		directory: path.resolve(__dirname, '../migrations')
	},
	seeds: {
		directory: path.resolve(__dirname, '../seeds')
	}
};

module.exports = connection;
