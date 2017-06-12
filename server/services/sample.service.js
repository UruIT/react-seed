const sampleStore = require('../datastore/stores/sample.store');

class SampleService {
	getAll() {
		return Promise.resolve(sampleStore.getAll());
	}

	get(id) {
		return sampleStore.get(id);
	}

	insert(sample) {
		return sampleStore.insert(sample);
	}
}

module.exports = new SampleService();
