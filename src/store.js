import todos from './reducer/todo-reducer';
import counters from './reducer/counter-reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
/** for routing**/
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

const finalReducer = combineReducers({ todos, counters, routing: routeReducer });

/** middlewares **/
const routerMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(routerMiddleware)(createStore);

const store = createStoreWithMiddleware(finalReducer);

routerMiddleware.listenForReplays(store);


export default store;
