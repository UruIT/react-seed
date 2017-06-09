const BaseStore = require('./base.store');
const User = require('./models/user.model');
const { MongoErrorsNames } = require('./constants');

class UserStore extends BaseStore {
	constructor() {
		super(User);
	}

	save(entity) {
		return super.save(entity);
	}
}

module.exports = new UserStore();
