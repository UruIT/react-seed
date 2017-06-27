import { createStore, applyMiddleware, combineReducers } from 'redux';
import { counterReducer as counter } from '../components/counter';
import { appReducer as app } from '../components/app';
import { translationsReducer as translations } from '../translations/translations.reducer'
import loggerMiddleware from './middlewares/logger';
import { sagaMiddleware, runSagas } from '../saga';

const rootReducer = combineReducers({
	counter,
	app,
	translations
});

function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(
			loggerMiddleware,
			sagaMiddleware
		)
	);

	runSagas();

	return store;
}

export default configureStore;
