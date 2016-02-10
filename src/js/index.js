/** styles **/
import '../css/main.css';
import 'normalize.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { setConfig } from './util/ajax';
import store from './store';

import App from './component/app';
import Todo from './component/todo/todo';

import CSSCompnent from './component/css-tutorial/css-component';
import CounterManager from './component/counter/counter-manager';
import Floats from './component/css-tutorial/float';
import Layout from './component/css-tutorial/simple-layout';
import MediaQuery from './component/css-tutorial/media-queries';
import Display from './component/css-tutorial/display';
import Positions from './component/css-tutorial/position';
import BoxModel from './component/css-tutorial/box-model';

import BSComponent from './component/bs-tutorial/bs-component';
import Grid from './component/bs-tutorial/bs-grid';

setConfig('http://train.integdev.com:9000');

const DefaultPage = () => (
  <BSComponent>
    <Grid/>
  </BSComponent>
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
          <Route path="float" component={Floats}/>
          <Route path="layout" component={Layout}/>
          <Route path="mq" component={MediaQuery}/>
        </Route>
        <Route path="bs" component={BSComponent}>
          <Route path="grid" component={Grid}/>
        </Route>
        <Route path="counters" component={CounterManager}/>
        <Route path="todos" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'));
