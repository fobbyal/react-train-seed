import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './component/app';
import Todo from './component/todo/todo';
import CounterManager from './component/counter/counter-manager';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';


ReactDom.render(
  <Provider store={store}>
    <Router history ={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Todo}/>
        <Route path="counters" component={CounterManager}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'));
