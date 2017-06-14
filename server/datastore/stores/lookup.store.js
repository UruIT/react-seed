const BaseStore = require('./base.store');

class LookupStore extends BaseStore {
	constructor() {
		super('lookup');
	}
}

module.exports = new LookupStore();
