exports.seed = function(knex) {
	return knex.raw('CREATE DATABASE reactseeddb');
};
