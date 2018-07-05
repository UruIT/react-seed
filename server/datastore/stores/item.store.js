const BaseStore = require('./base.store');

class ItemStore extends BaseStore {
	constructor() {
		super('item');
	}
}

module.exports = new ItemStore();
