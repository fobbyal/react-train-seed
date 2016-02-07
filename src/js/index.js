import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './component/app';
import Todo from './component/todo/todo';
import CSSCompnent from './component/css-tutorial/css-component';
import CounterManager from './component/counter/counter-manager';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { setConfig } from './util/ajax';
import '../css/main.css';


import Display from './component/css-tutorial/display';
import Positions from './component/css-tutorial/position';
import BoxModel from './component/css-tutorial/box-model';


setConfig('http://train.integdev.com:9000');

const DefaultPage = () => (
  <CSSCompnent>
    <Display/>
  </CSSCompnent>
);


ReactDom.render(
  <Provider store={store}>
    <Router history ={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DefaultPage}/>
        <Route path="css" component={CSSCompnent}>
          <Route path="display" component={Display}/>
          <Route path="box-model" component={BoxModel}/>
          <Route path="position" component={Positions}/>
        </Route>
        <Route path="counters" component={CounterManager}/>
        <Route path="todos" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'));
