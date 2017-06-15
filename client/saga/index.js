import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';

export const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => {
	sagaMiddleware.run(rootSagas);
};
