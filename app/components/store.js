import { createStore } from 'redux';
import { CounterReducer } from './counter';

export default createStore(CounterReducer);
