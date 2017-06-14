import { createStore, applyMiddleware } from 'redux';
import { CounterReducer } from '../components/counter';
import loggerMiddlewaare from './middlewares/logger';

export default createStore(
	CounterReducer,
	applyMiddleware(loggerMiddlewaare)
);
