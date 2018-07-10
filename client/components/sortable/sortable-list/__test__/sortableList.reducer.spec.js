import { sortableReducer } from '../sortableList.reducer';
import * as actions from '../sortableList.action';
import items from '../items';

describe('sortable list reducer', () => {
	it('should return the initial state', () => {
		const state = sortableReducer(undefined, {});
		expect(state).toEqual({
			loading: false,
			items: [],
			error: ''
		});
	});

	it('should handle ITEMS_FETCH_REQUESTED', () => {
		const state = {
			loading: false,
			items: [],
			error: ''
		};
		const action = {
			type: actions.ITEMS_FETCH_REQUESTED
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			loading: true,
			items: [],
			error: ''
		});

		nextState = sortableReducer({ ...state, error: 'some error!' }, action);
		expect(nextState).toEqual({
			loading: true,
			items: [],
			error: ''
		});

		nextState = sortableReducer({ ...state, items }, action);
		expect(nextState).toEqual({
			loading: true,
			items,
			error: ''
		});
	});

	it('should handle ITEMS_FETCH_SUCCEEDED', () => {
		const state = {
			loading: true,
			items: [],
			error: ''
		};
		const action = {
			type: actions.ITEMS_FETCH_SUCCEEDED,
			items
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			items,
			error: ''
		});

		nextState = sortableReducer(
			{
				...state,
				items
			},
			action
		);
		expect(nextState).toEqual({
			loading: false,
			items,
			error: ''
		});
	});

	it('should handle ITEMS_FETCH_FAILED', () => {
		const state = {
			loading: true,
			items: [],
			error: ''
		};
		const action = {
			type: actions.ITEMS_FETCH_FAILED,
			message: 'error message!'
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			items: []
		});

		nextState = sortableReducer(
			{
				...state,
				items
			},
			action
		);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			items: []
		});
	});

	it('should handle SORT_LIST_REQUESTED', () => {
		const state = {
			loading: false,
			items: [],
			error: ''
		};
		const action = {
			type: actions.SORT_LIST_REQUESTED,
			payload: {
				oldIndex: 0,
				newIndex: 2
			}
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			...state,
			loading: true
		});

		nextState = sortableReducer({ ...state, error: 'some error!' }, action);
		expect(nextState).toEqual({
			...state,
			loading: true,
			error: ''
		});

		nextState = sortableReducer({ ...state, items }, action);
		expect(nextState).toEqual({
			loading: true,
			items,
			error: ''
		});
	});

	it('should handle SORT_LIST_SUCCEEDED', () => {
		const state = {
			loading: true,
			items: [],
			error: ''
		};
		const action = {
			type: actions.SORT_LIST_SUCCEEDED,
			items
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			items,
			error: ''
		});

		nextState = sortableReducer(
			{
				...state,
				items
			},
			action
		);
		expect(nextState).toEqual({
			loading: false,
			items,
			error: ''
		});
	});

	it('should handle SORT_LIST_FAILED', () => {
		const state = {
			loading: true,
			items: [],
			error: ''
		};
		const action = {
			type: actions.SORT_LIST_FAILED,
			message: 'error message!'
		};

		let nextState = sortableReducer(state, action);
		expect(nextState).toEqual({
			...state,
			loading: false,
			error: 'error message!'
		});

		nextState = sortableReducer(
			{
				...state,
				items
			},
			action
		);
		expect(nextState).toEqual({
			...state,
			items,
			loading: false,
			error: 'error message!'
		});
	});
});
