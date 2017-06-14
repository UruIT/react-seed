const sampleStore = require('../datastore/stores/sample.store');
const { NotFoundException } = require('../exceptions');

class SampleService {
	getAll() {
		return sampleStore.getAll();
	}

	get(id) {
		return sampleStore.get(id).then(sample => {
			if (!sample) {
				throw new NotFoundException();
			}
			return sample;
		});
	}

	insert(sample) {
		return sampleStore.insert(sample);
	}
}

module.exports = new SampleService();
