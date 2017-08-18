exports.seed = function(knex) {
	const db = 'reactseeddb';
	const user = 'pg';
	const pass = 'pg';

	const createDb = () => knex.raw(`CREATE DATABASE ${db}`);
	const createUser = () => knex.raw(`CREATE USER ${user} WITH PASSWORD '${pass}'`);
	const grantUserToDb = () => knex.raw(`GRANT ALL ON DATABASE ${db} TO ${user}`);

	return createDb().then(createUser).then(grantUserToDb);
};
