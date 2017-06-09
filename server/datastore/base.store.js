const mongoose = require('mongoose');
const { MongoErrors } = require('./constants');
const { GenericException, ValidationException } = require('../exceptions');

class BaseStore {
	constructor(model) {
		this.model = model;
	}

	getById(id) {
		return this.model.find({ _id: mongoose.Types.ObjectId(id) }).exec();
	}

	getAll() {
		return this.model.find().exec();
	}

	save(entity) {
		const dbEntity = new this.model(entity);
		return dbEntity.save().then(response => ({ id: response._id })).catch(err => {
			if (err.code === MongoErrors.VALIDATION_ERROR) {
				throw new ValidationException();
			} else {
				throw new GenericException(err);
			}
		});
	}
}

module.exports = BaseStore;
