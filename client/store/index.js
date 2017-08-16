import { createStore, applyMiddleware, combineReducers } from 'redux';
import { counterReducer as counter } from '../components/counter';
import app from '../components/app/app.reducer';
import loggerMiddleware from './middlewares/logger';
import { sagaMiddleware, runSagas } from '../saga';

const rootReducer = combineReducers({
	counter,
	app
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
