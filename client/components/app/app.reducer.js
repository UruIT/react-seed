import { SAMPLES_FETCH_REQUESTED, SAMPLES_FETCH_SUCCEEDED, SAMPLES_FETCH_FAILED } from './app.action';

const DEFAULT_STATE = { samples: [], loading: false, error: '' };

export default function appReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case SAMPLES_FETCH_REQUESTED:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SAMPLES_FETCH_SUCCEEDED:
			return {
				samples: action.samples,
				loading: false,
				error: ''
			};
		case SAMPLES_FETCH_FAILED:
			return {
				...DEFAULT_STATE,
				error: action.message
			};
		default:
			return state;
	}
}
