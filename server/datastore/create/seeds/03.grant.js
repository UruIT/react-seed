exports.seed = function(knex) {
	return knex.raw('GRANT ALL ON DATABASE reactseeddb TO pg');
};
