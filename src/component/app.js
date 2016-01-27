import React from 'react';
import Catalog from './catalog';
import Cart from './cart';

import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ Catalog } />
        <Route path="cart" component={ Cart } />
      </Route>
    </Router>
  );
};
