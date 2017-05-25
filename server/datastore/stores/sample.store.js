const BaseStore = require('./base.store');

class SampleStore extends BaseStore {
	constructor() {
		super('sample');
	}
}

module.exports = new SampleStore();
