import {
	COUNTER_INCREMENT,
	COUNTER_DECREMENT,
	counterIncrement,
	counterDecrement
} from '../counter.action';

describe('counter action creators', () => {
	it('counterIncrement creates COUNTER_INCREMENT action', () => {
		const expectedAction = {
			type: COUNTER_INCREMENT,
			payload: 1
		};

		const action = counterIncrement();

		expect(action).toEqual(expectedAction);
	});

	it('counterIncrement with custom payload', () => {
		const payload = 11;
		const expectedAction = {
			type: COUNTER_INCREMENT,
			payload
		};

		const action = counterIncrement(payload);

		expect(action).toEqual(expectedAction);
	});

	it('counterDecrement creates COUNTER_DECREMENT action', () => {
		const expectedAction = {
			type: COUNTER_DECREMENT,
			payload: 1
		};

		const action = counterDecrement();

		expect(action).toEqual(expectedAction);
	});

	it('counterDecrement with custom payload', () => {
		const payload = 11;
		const expectedAction = {
			type: COUNTER_DECREMENT,
			payload
		};

		const action = counterDecrement(payload);

		expect(action).toEqual(expectedAction);
	});
});
