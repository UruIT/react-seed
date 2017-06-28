import { TRANSLATIONS_REQUESTED, TRANSLATIONS_SUCCEEDED, TRANSLATIONS_FAILED } from './translations.action';

const DEFAULT_STATE = { translations: {}, loading: false, error: '' };

export function translationsReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case TRANSLATIONS_REQUESTED:
			return {
				...state,
				loading: true,
				error: ''
			};
		case TRANSLATIONS_SUCCEEDED:
			return {
				translations: action.translations,
				loading: false,
				error: ''
			};
		case TRANSLATIONS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message
			};
		default:
			return state;
	}
}
