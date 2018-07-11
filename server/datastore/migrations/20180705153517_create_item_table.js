exports.up = function(knex, Promise) {
	return Promise.resolve(
		knex.schema.createTable('item', function(table) {
			table.integer('id').primary();
			table.integer('index').notNullable();
			table.string('title').notNullable();
			table.string('content').notNullable();
		})
	);
};

exports.down = function(knex, Promise) {
	return Promise.resolve(knex.schema.dropTable('item'));
};
