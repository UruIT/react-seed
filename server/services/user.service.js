const userStore = require('../datastore/user.store');
const NotFoundException = require('../exceptions/not-found.exception');

class UserService {
	getAll() {
		return userStore.getAll();
	}

	get(id) {
		return userStore.getById(id).then(user => {
			if (!user) {
				throw new NotFoundException();
			}
			return user;
		});
	}

	save(newUser) {
		return userStore.save(newUser);
	}
}

module.exports = new UserService();
