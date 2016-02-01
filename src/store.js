import todos from './reducer/todo-reducer';
import counters from './reducer/counter-reducer';
import { createStore, combineReducers } from 'redux';

const finalReducer = combineReducers({ todos, counters });

export default createStore(finalReducer);
