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
	update(item) {
		return itemStore.update(item.id, item);
	}
}

module.exports = new ItemsService();
