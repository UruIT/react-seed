
exports.up = function (knex) {
	return Promise.resolve(
		knex.schema.createTable('sample', function (table) {
			table.integer('id').primary();
			table.string('description').notNullable();
		})
	);
};

exports.down = function (knex) {
	return Promise.resolve(
		knex.schema.dropTable('sample')
	);
};
