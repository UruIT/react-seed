import appReducer from '../app.reducer';
import * as actions from '../app.action'

const samples = [
	{ id: 1, description: 'sample #1' },
	{ id: 2, description: 'sample #2' },
	{ id: 3, description: 'sample #3' }
];

describe('app reducer', () => {
	it('should return the initial state', () => {
		const state = appReducer(undefined, {});
		expect(state).toEqual({
			loading: false,
			samples: [],
			error: ''
		});
	});

	it('should handle SAMPLES_FETCH_REQUESTED', () => {
		const state = {
			loading: false,
			samples: [],
			error: ''
		};
		const action = {
			type: actions.SAMPLES_FETCH_REQUESTED
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: true,
			samples: [],
			error: ''
		});

		nextState = appReducer({ ...state, error: 'some error!' }, action);
		expect(nextState).toEqual({
			loading: true,
			samples: [],
			error: ''
		});

		nextState = appReducer({ ...state, samples }, action);
		expect(nextState).toEqual({
			loading: true,
			samples,
			error: ''
		});
	});

	it('should handle SAMPLES_FETCH_SUCCEEDED', () => {
		const state = {
			loading: true,
			samples: [],
			error: ''
		};
		const action = {
			type: actions.SAMPLES_FETCH_SUCCEEDED,
			samples
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			samples,
			error: ''
		});

		nextState = appReducer({
			...state,
			samples
		}, action);
		expect(nextState).toEqual({
			loading: false,
			samples,
			error: ''
		});
	});

	it('should handle SAMPLES_FETCH_FAILED', () => {
		const state = {
			loading: true,
			samples: [],
			error: ''
		};
		const action = {
			type: actions.SAMPLES_FETCH_FAILED,
			message: 'error message!'
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			samples: []
		});

		nextState = appReducer({
			...state,
			samples
		}, action);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			samples: []
		});
	});
});
