import { JOKE_FETCH_REQUESTED, JOKE_FETCH_SUCCEEDED, JOKE_FETCH_FAILED } from './app.action';

const DEFAULT_STATE = { joke: '', loading: false, error: '' };

export function appReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case JOKE_FETCH_REQUESTED:
			return {
				...state,
				loading: true,
				error: ''
			};
		case JOKE_FETCH_SUCCEEDED:
			return {
				joke: action.joke.value,
				loading: false,
				error: ''
			};
		case JOKE_FETCH_FAILED:
			return {
				...DEFAULT_STATE,
				error: action.message
			};
		default:
			return state;
	}
}
