import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './CounterActions';

const DEFAULT_STATE = 0;

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return state + action.payload;
		case COUNTER_DECREMENT:
			return state - action.payload;
		default:
			return state;
	}
};

export default reducer;
