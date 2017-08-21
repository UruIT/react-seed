const path = require('path');

const connection = {
	client: 'mssql',
	connection: {
		host: 'localhost',
		user: 'sa',
		password: 'sa.mssql.01'
	},
	seeds: {
		directory: path.resolve(__dirname, './seeds')
	}
};

module.exports = connection;
