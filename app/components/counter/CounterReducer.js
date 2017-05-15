import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './CounterActions';

const DEFAULT_STATE = { value: 0 };

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return {
				value: state.value + 1
			};
		case COUNTER_DECREMENT:
			return {
				value: state.value - 1
			};
		default:
			return DEFAULT_STATE;
	}
};

export default reducer;
