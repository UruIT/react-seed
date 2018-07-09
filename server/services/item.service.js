const itemStore = require('../datastore/stores/item.store');
const { NotFoundException } = require('../exceptions');

class ItemsService {
	getAll() {
		return itemStore.getAll();
	}

	get(id) {
		return itemStore.get(id).then(item => {
			if (!item) {
				throw new NotFoundException();
			}
			return item;
		});
	}

	insert(item) {
		return itemStore.insert(item);
	}
	update(items) {
		return new Promise((resolve, reject) => {
			const promises = items.map((item, index) => {
				item.index = index;
				return new Promise((resolve, reject) => {
					itemStore
						.update(item.id, item)
						.then(resolve)
						.catch(reject);
				});
			});

			Promise.all(promises).then(resolve, reject);
		});
	}
}

module.exports = new ItemsService();
