const Bluebird = require('bluebird');
const knexfile = require('../postgres/knexfile');
const Knex = require('knex')(knexfile);

class BaseStore {
	constructor(tableName) {
		this.tableName = tableName;
	}

	get table() {
		return Knex(this.tableName);
	}

	get(id) {
		return this.table
			.first('*')
			.where('id', id)
			.then((data) => (data || {}));
	}

	getAll() {
		return this.table.select('*');
	}

	// Accepts an object or an array of objects to insert
	insert(entity, trx, returning = 'id') {
		return this.table
			.transacting(trx)
			.insert(entity, returning);
	}

	update(id, entity, trx, returning = 'id') {
		return this.table
			.transacting(trx)
			.where('id', id)
			.update(entity, returning);
	}
}

module.exports = BaseStore;
