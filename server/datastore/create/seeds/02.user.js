exports.seed = function(knex) {
	return knex.raw('CREATE USER pg WITH PASSWORD \'pg\'');
};
