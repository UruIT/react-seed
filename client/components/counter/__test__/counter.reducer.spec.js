import { counterReducer } from '../counter.reducer';
import * as actions from '../counter.action';

describe('app reducer', () => {

	it('should return the initial state', () => {
		const state = counterReducer(undefined, {});
		expect(state).toEqual(0);
	});

	it('should handle COUNTER_INCREMENT', () => {
		const state = 0;
		const action = {
			type: actions.COUNTER_INCREMENT,
			payload: 1
		};

		let nextState = counterReducer(state, action);
		expect(nextState).toEqual(1);

		nextState = counterReducer(5, action);
		expect(nextState).toEqual(6);

		nextState = counterReducer(9, {
			...action,
			payload: 10
		});
		expect(nextState).toEqual(19);

		nextState = counterReducer(9, {
			...action,
			payload: 0
		});
		expect(nextState).toEqual(9);
	});

	it('should handle COUNTER_DECREMENT', () => {
		const state = 0;
		const action = {
			type: actions.COUNTER_DECREMENT,
			payload: 1
		};

		let nextState = counterReducer(state, action);
		expect(nextState).toEqual(-1);

		nextState = counterReducer(5, action);
		expect(nextState).toEqual(4);

		nextState = counterReducer(9, {
			...action,
			payload: 10
		});
		expect(nextState).toEqual(-1);

		nextState = counterReducer(9, {
			...action,
			payload: 0
		});
		expect(nextState).toEqual(9);
	});
});
