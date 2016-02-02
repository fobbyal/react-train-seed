import React from 'react';
import { Link } from 'react-router';

export default ({ children }) => (
    <div>
      <h1>Welcome to App with Router</h1>
      <ul>
      <li><Link to={'/'}>Todo</Link></li>
      <li><Link to={'/counters'}>Counters</Link></li>
      </ul>

      <div>{children}</div>
    </div>
);
