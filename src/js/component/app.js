import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { doCrazy, evenCrazier, getSimpleInteg } from '../action/complex-actions';
/**
      <li><button onClick={goToCounters}>Click Me to go to Counters</button></li>
      <li><button onClick={fetchInteg}>Click Me to go Crazy</button></li>
**/


export default ({ children }) => (
  <div>
  {/**
     <nav className="navbar navbar-default">
        <Link className="navbar-brand" to={'/'}>Integ SPA tutorial</Link>
        <ul className="nav navbar-nav">
          <li><Link to={'/'}>Bootstrap tutorial</Link></li>
          <li><Link to={'/css/display'}>Css tutorial</Link></li>
          <li><Link to={'/counters'}>Counters</Link></li>
          <li><Link to={'/todos'}>Todos</Link></li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
  **/}
        <h1>Integ SPA tutorial</h1>
        <ul>
          <li><Link to={'/'}>Bootstrap tutorial</Link></li>
          <li><Link to={'/css/display'}>Css tutorial</Link></li>
          <li><Link to={'/counters'}>Counters</Link></li>
          <li><Link to={'/todos'}>Todos</Link></li>
        </ul>
      <div className="container">
        {children}
      </div>
  </div>
);
