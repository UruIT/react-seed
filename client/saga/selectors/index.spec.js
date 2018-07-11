import { getSortableItems } from './index';
describe('selectors', () => {
	const store = {
		sortable: {
			items: ['Item 1', 'Item 2']
		}
	};
	it('selectSortableItems', () => {
		expect(getSortableItems(store)).toEqual(['Item 1', 'Item 2']);
	});
});
