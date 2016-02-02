import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export const App = ({ children, goToCounters }) => (
    <div>
      <h1>Welcome to App with Router</h1>
      <ul>
      <li><Link to={'/'}>Todo</Link></li>
      <li><Link to={'/counters'}>Counters</Link></li>
      <li><button onClick={goToCounters}>Click Me to go to Counters</button></li>
      </ul>

      <div>{children}</div>
    </div>
);
export default connect(
  null,
  (dispatch) => ({
    goToCounters:() => {dispatch({type:'CRAZY'});}
  })
)(App);
