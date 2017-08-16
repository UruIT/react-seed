import appReducer from '../app.reducer';
import * as actions from '../app.action'

describe('app reducer', () => {
	it('should return the initial state', () => {
		const state = appReducer(undefined, {});
		expect(state).toEqual({
			loading: false,
			joke: '',
			error: ''
		});
	});

	it('should handle JOKE_FETCH_REQUESTED', () => {
		const state = {
			loading: false,
			joke: '',
			error: ''
		};
		const action = {
			type: actions.JOKE_FETCH_REQUESTED
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: true,
			joke: '',
			error: ''
		});

		nextState = appReducer({ ...state, error: 'some error!' }, action);
		expect(nextState).toEqual({
			loading: true,
			joke: '',
			error: ''
		});

		nextState = appReducer({ ...state, joke: 'joke' }, action);
		expect(nextState).toEqual({
			loading: true,
			joke: 'joke',
			error: ''
		});
	});

	it('should handle JOKE_FETCH_SUCCEEDED', () => {
		const state = {
			loading: true,
			joke: '',
			error: ''
		};
		const action = {
			type: actions.JOKE_FETCH_SUCCEEDED,
			joke: {
				value: 'The only thing scarier than a black hole is a Chuck Norris'
			}
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			joke: 'The only thing scarier than a black hole is a Chuck Norris',
			error: ''
		});

		nextState = appReducer({
			...state,
			joke: 'chuck norris once granted a genie 3 wishes'
		}, action);
		expect(nextState).toEqual({
			loading: false,
			joke: 'The only thing scarier than a black hole is a Chuck Norris',
			error: ''
		});
	});

	it('should handle JOKE_FETCH_FAILED', () => {
		const state = {
			loading: true,
			joke: '',
			error: ''
		};
		const action = {
			type: actions.JOKE_FETCH_FAILED,
			message: 'error message!'
		};

		let nextState = appReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			joke: ''
		});

		nextState = appReducer({
			...state,
			joke: 'Only Chuck Norris can divide by zero'
		}, action);
		expect(nextState).toEqual({
			loading: false,
			error: 'error message!',
			joke: ''
		});
	});
});
