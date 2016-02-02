import todos from './reducer/todo-reducer';
import counters from './reducer/counter-reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
/** for routing**/
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import * as CounterActions from './action/counter-action';
import { push } from 'react-router-redux';

const finalReducer = combineReducers({ todos, counters, routing: routeReducer });


/* *middlewares **/
const createLogger = ({ getState }) => {
  return (next) => (action) => {
    const console = window.console;
    const prevState = getState();
    const returnValue = next(action);
    const nextState = getState();
    // const actionType = String(action.type);
    // const message = `action ${actionType}`;
    console.log(`%c prev state`, `color: #9E9E9E`, prevState);
    console.log(`%c action`, `color: #03A9F4`, action);
    console.log(`%c next state`, `color: #4CAF50`, nextState);
    return returnValue;
  };
};

/* *middlewares **/
const crazy = ({ getState,dispatch }) => {
  return (next) => (action) => {
    if (action.type === 'CRAZY') {
      dispatch(push('/counters'));
      dispatch(CounterActions.add());
      dispatch(CounterActions.add());
      dispatch(CounterActions.add());
      return next(CounterActions.add());
    }
    return next(action);
  };
};



const routerMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(routerMiddleware, createLogger, crazy)(createStore);

const store = createStoreWithMiddleware(finalReducer);

routerMiddleware.listenForReplays(store);


export default store;
