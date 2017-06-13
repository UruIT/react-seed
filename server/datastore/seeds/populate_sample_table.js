
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('sample').del().then(function() {
		// Inserts seed entries
		return knex('sample').insert([
			{ id: 1, description: 'UruIT' },
			{ id: 2, description: 'React' },
			{ id: 3, description: 'Seed' }
		]);
	});
};
