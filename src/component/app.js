import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { doCrazy, evenCrazier, getSimpleInteg } from '../action/complex-actions';



export const App = ({ children, goToCounters,fetchInteg }) => (
    <div>
      <h1>Welcome to App with Router</h1>
      <ul>
      <li><Link to={'/'}>Todo</Link></li>
      <li><Link to={'/counters'}>Counters</Link></li>
      <li><button onClick={goToCounters}>Click Me to go to Counters</button></li>
      <li><button onClick={fetchInteg}>Click Me to go Crazy</button></li>
      </ul>

      <div>{children}</div>
    </div>
);
export default connect(
  null,
  (dispatch) => ({
    goToCounters:() => dispatch(doCrazy()),
    fetchInteg:() => dispatch(evenCrazier()) 
  })
)(App);
