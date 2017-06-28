import { translationsReducer } from '../translations.reducer';
import * as actions from '../translations.action';

describe('translations reducer', () => {
	it('should return the initial state', () => {
		const state = translationsReducer(undefined, {});
		expect(state).toEqual({
			loading: false,
			translations: {},
			error: ''
		});
	});
	it('should handle TRANSLATIONS_REQUESTED', () => {
		const state = {
			loading: false,
			translations: {},
			error: ''
		};
		const action = {
			type: actions.TRANSLATIONS_REQUESTED
		};

		let nextState = translationsReducer(state, action);
		expect(nextState).toEqual({
			loading: true,
			translations: {},
			error: ''
		});

		nextState = translationsReducer({ ...state, translations: { test: 'Test' } }, action);
		expect(nextState).toEqual({
			loading: true,
			translations: { test: 'Test' },
			error: ''
		});

		nextState = translationsReducer({ ...state, error: 'bad request!' }, action);
		expect(nextState).toEqual({
			loading: true,
			translations: {},
			error: ''
		});
	});

	it('should handle TRANSLATIONS SUCCEEDED', () => {
		const state = {
			loading: true,
			translations: {},
			error: ''
		};
		const action = {
			type: actions.TRANSLATIONS_SUCCEEDED,
			translations: { test: 'Test' }
		};

		let nextState = translationsReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			translations: { test: 'Test' },
			error: ''
		});

		nextState = translationsReducer({ ...state, translations: { test: 'Prueba' } }, action);
		expect(nextState).toEqual({
			loading: false,
			translations: { test: 'Test' },
			error: ''
		});

		nextState = translationsReducer({ ...state, translations: { test: 'Prueba' }, error: 'bad request!' }, action);
		expect(nextState).toEqual({
			loading: false,
			translations: { test: 'Test' },
			error: ''
		});
	});

	it('should handle TRANSLATIONS_FAILED', () => {
		const state = {
			loading: true,
			translations: {},
			error: ''
		};
		const action = {
			type: actions.TRANSLATIONS_FAILED,
			message: 'error!!'
		};

		let nextState = translationsReducer(state, action);
		expect(nextState).toEqual({
			loading: false,
			translations: {},
			error: 'error!!'
		});

		nextState = translationsReducer({...state, translations:{"test":"Test"}}, action);
		expect(nextState).toEqual({
			loading: false,
			translations: {"test":"Test"},
			error: 'error!!'
		});

		nextState = translationsReducer({...state, error:"bad request!"}, action);
		expect(nextState).toEqual({
			loading: false,
			translations: {},
			error: 'error!!'
		});
	})
});
