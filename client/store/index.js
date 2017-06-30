import { createStore, applyMiddleware, combineReducers } from 'redux';
import { counterReducer as counter } from '../components/counter';
import { appReducer as app } from '../components/app';
import { formReducer as inputs } from '../components/trackedForm';
import loggerMiddleware from './middlewares/logger';
import { sagaMiddleware, runSagas } from '../saga';
import { createTracker } from 'redux-segment';

const tracker = createTracker();

const rootReducer = combineReducers({
	counter,
	app,
	inputs
});

function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(
			loggerMiddleware,
			sagaMiddleware,
			tracker
		)
	);

	runSagas();

	return store;
}

export default configureStore;
