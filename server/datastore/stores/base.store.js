const knexfile = require('../connection/knexfile');
const Knex = require('knex')(knexfile);

const PostgresErrors = require('../constants/postgres-errors');
const { BadRequestException, ValidationException } = require('../../exceptions');

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
			.where('id', id);
	}

	getAll() {
		return this.table.select('*');
	}

	// Accepts an object or an array of objects to insert
	insert(entity, trx, returning = 'id') {
		return this.table
			.transacting(trx)
			.insert(entity, returning)
			.catch(err => {
				if (err.code === PostgresErrors.NOT_NULL_VIOLATION) {
					throw new BadRequestException();
				}
				if (err.code === PostgresErrors.FOREIGN_KEY_VIOLATION) {
					throw new ValidationException();
				}
				throw err;
			});
	}

	update(id, entity, trx, returning = 'id') {
		return this.table
			.transacting(trx)
			.where('id', id)
			.update(entity, returning);
	}
}

module.exports = BaseStore;
