exports.seed = function(knex) {
	const db = 'reactseeddb';
	const user = 'mssql';
	const pass = 'mssql';

	const createDb = () => knex.raw(`CREATE DATABASE ${db}`);
	const createUser = () => knex.raw(`CREATE LOGIN ${user} WITH PASSWORD = '${pass}', CHECK_POLICY = OFF, CHECK_EXPIRATION = OFF`);
	const grantUserToDb = () => knex.raw(`USE [${db}]; CREATE USER [${user}] FOR LOGIN ${user}; EXEC sp_addrolemember N'db_owner', N'${user}'`);

	return createDb().then(createUser).then(grantUserToDb);
};
