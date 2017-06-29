import { EventTypes } from 'redux-segment';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const counterIncrement = (payload = 1) => ({
	type: COUNTER_INCREMENT,
	payload
});

export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const counterDecrement = (payload = 1) => ({
	type: COUNTER_DECREMENT,
	payload,
	meta: {
		analytics: EventTypes.track,
	}
});
