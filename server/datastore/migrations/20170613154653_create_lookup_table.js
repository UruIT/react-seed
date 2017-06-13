
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('lookup', function (table) {
			table.integer('id').primary();
			table.string('description').notNullable();
		}),
		knex.schema.table('sample', function (table) {
			table.integer('value').references('id').inTable('lookup');
		})
	])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.table('sample', function (table) {
			table.dropColumn('value');
		}),
		knex.schema.dropTable('lookup')
	])
};
