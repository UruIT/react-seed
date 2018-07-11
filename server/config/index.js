const commonConfig = {
	database: {
		connectionString: process.env.DATABASE_URL || 'postgres://postgres:sa.pg.01@localhost:5432/reactseeddb'
	},
	port: 3000,
	sslPort: 4443
	// Add here settings shared by all the environments
};

const appConfigurations = {
	development: Object.assign({}, commonConfig, {
		// Add development configurations here
	}),
	stage: Object.assign({}, commonConfig, {
		// Add stage configurations here
	}),
	production: Object.assign({}, commonConfig, {
		// Add production configurations here
	})
};

module.exports = appConfigurations[process.env.NODE_ENV || 'development'];
