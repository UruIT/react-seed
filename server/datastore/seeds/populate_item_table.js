exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('item')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('item').insert([
				{ id: 1, index: 0, title: 'Lukas Podolski', content: 'Football is like chess but without the dice' },
				{
					id: 2,
					index: 1,
					title: 'Bart Simpson',
					content: "I didn't do it"
				},
				{
					id: 3,
					index: 2,
					title: 'Groucho Marx',
					content: "Outside of a dog, a book is man's best friend. Inside of a dog, it's too dark to read."
				},
				{ id: 4, index: 3, title: 'Garrison Keillor', content: 'When in doubt, look intelligent.' }
			]);
		});
};
