const BaseStore = require('./base.store');
const User = require('./models/user.model');
const { BadRequestException, GenericException } = require('../exceptions');
const { MongoErrorsNames } = require('./constants');

class UserStore extends BaseStore {
	constructor() {
		super(User);
	}

	save(entity) {
		return super.save(entity).catch(error => {
			if (error instanceof GenericException &&
				error.innerError.name === MongoErrorsNames.VALIDATION_ERROR) {
				const message = Object.values(error.innerError.errors || {}).join('\n');
				throw new BadRequestException(message);
			} else {
				throw error;
			}
		});
	}
}

module.exports = new UserStore();
