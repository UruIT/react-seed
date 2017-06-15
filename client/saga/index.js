import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

export const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => {
	Object.values(sagas).forEach(sagaMiddleware.run);
};
