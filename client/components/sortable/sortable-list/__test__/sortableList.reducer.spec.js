import { sortableReducer } from '../sortableList.reducer';
import * as actions from '../sortableList.action';
import items from '../items';

describe('sortable list reducer', () => {
	const DEFAULT_STATE = {
		loading: false,
		items: [],
		error: ''
	};

	it('should return the initial state', () => {
		const state = sortableReducer(undefined, {});
		expect(state).toEqual(DEFAULT_STATE);
	});

	describe('handle ITEMS_FETCH_REQUESTED', () => {
		const action = {
			type: actions.ITEMS_FETCH_REQUESTED
		};

		it('should return the loading state if called with initial state', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				loading: true,
				items: [],
				error: ''
			});
		});

		it('should return the loading state if called with error state', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, error: 'some error!' }, action);
			expect(nextState).toEqual({
				loading: true,
				items: [],
				error: ''
			});
		});

		it('should return the loading state with items', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, items }, action);
			expect(nextState).toEqual({
				loading: true,
				items,
				error: ''
			});
		});
	});

	describe('handle ITEMS_FETCH_SUCCEEDED', () => {
		const action = {
			type: actions.ITEMS_FETCH_SUCCEEDED,
			items
		};

		it('should return the initial state with items', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				loading: false,
				items,
				error: ''
			});
		});

		it('should return the initial state with items if calleded with items in state', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, items }, action);
			expect(nextState).toEqual({
				loading: false,
				items,
				error: ''
			});
		});
	});

	describe('handle ITEMS_FETCH_FAILED', () => {
		const action = {
			type: actions.ITEMS_FETCH_FAILED,
			message: 'error message!'
		};

		it('should retorn an error state', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				loading: false,
				error: 'error message!',
				items: []
			});
		});

		it('should retorn an error state if called with items in the state', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, items }, action);
			expect(nextState).toEqual({
				loading: false,
				error: 'error message!',
				items: []
			});
		});
	});

	describe('handle SORT_LIST_REQUESTED', () => {
		const action = {
			type: actions.SORT_LIST_REQUESTED,
			payload: {
				oldIndex: 0,
				newIndex: 2
			}
		};

		it('should return the initial state with loading in true', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				...DEFAULT_STATE,
				loading: true
			});
		});

		it('should return the initial state with loading in true if called with error', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, error: 'some error!' }, action);
			expect(nextState).toEqual({
				...DEFAULT_STATE,
				loading: true,
				error: ''
			});
		});

		it('should return the initial state with loading in true and items', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, items }, action);
			expect(nextState).toEqual({
				loading: true,
				items,
				error: ''
			});
		});
	});

	describe('handle SORT_LIST_SUCCEEDED', () => {
		const action = {
			type: actions.SORT_LIST_SUCCEEDED,
			items
		};

		it('should return items in the state, no errors and loading in false', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				loading: false,
				items,
				error: ''
			});
		});

		it('should return items in the state, no errors and loading in false if called with errors', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, error: 'some error!' }, action);
			expect(nextState).toEqual({
				loading: false,
				items,
				error: ''
			});
		});
	});

	describe('handle SORT_LIST_FAILED', () => {
		const action = {
			type: actions.SORT_LIST_FAILED,
			message: 'error message!'
		};

		it('should return an error state', () => {
			let nextState = sortableReducer(DEFAULT_STATE, action);
			expect(nextState).toEqual({
				...DEFAULT_STATE,
				loading: false,
				error: 'error message!'
			});
		});

		it('should return an error state with items', () => {
			let nextState = sortableReducer({ ...DEFAULT_STATE, items }, action);
			expect(nextState).toEqual({
				...DEFAULT_STATE,
				items,
				loading: false,
				error: 'error message!'
			});
		});
	});
});
