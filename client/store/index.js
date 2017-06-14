import { createStore } from 'redux';
import { CounterReducer } from '../components/counter';

export default createStore(CounterReducer);
