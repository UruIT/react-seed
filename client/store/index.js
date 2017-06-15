import { createStore, applyMiddleware, combineReducers } from 'redux';
import { counterReducer as counter } from '../components/counter';
import { appReducer as app } from '../components/app';
import loggerMiddleware from './middlewares/logger';
import { sagaMiddleware, runSagas } from '../saga';

const reducer = combineReducers({
	counter,
	app
});

export default createStore(
	reducer,
	applyMiddleware(
		loggerMiddleware,
		sagaMiddleware
	)
);

runSagas();
