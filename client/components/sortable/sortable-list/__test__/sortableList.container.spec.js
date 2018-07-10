import '../../../../__test-mocks__/react-redux';
import sortableListContainer from '../sortableList.container';
import SortableList from '../SortableList';
import { itemsFetchRequested, sortListRequested } from '../sortableList.action';

const DEFAULT_STATE = {
	loading: false,
	items: [],
	error: ''
};
describe('sortable.container', () => {
	describe('mapStateToProps', () => {
		it('should select sortable from store state', () => {
			const sortable = DEFAULT_STATE;
			const state = { sortable };
			expect(sortableListContainer.mapStateToProps(state)).toBe(sortable);
		});
	});
	describe('mapDispatchToProps', () => {
		it('should return itemsFetchRequested, sortListRequested callback as fetchSamples and onSortEnd', () => {
			const expected = {
				onSortEnd: sortListRequested,
				fetchItems: itemsFetchRequested
			};
			expect(sortableListContainer.mapDispatchToProps).toMatchObject(expected);
		});
	});
	describe('WrappedComponent', () => {
		it('should be SortableList', () => {
			expect(sortableListContainer.WrappedComponent).toBe(SortableList);
		});
	});
});
