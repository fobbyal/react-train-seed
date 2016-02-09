import React from 'react';
import { Link } from 'react-router';
// export default ({ children }) => (
//     <div>
//     <ul>
//       <li><Link to={"/css/display"}> Display </Link></li>
//       <li><Link to={"/css/box-model"}> Box Model</Link></li>
//       <li><Link to={"/css/position"}> Position</Link></li>
//     </ul>
//     <div>
//       {children}
//     </div> //   </div>
// );
export default ({ children }) => (
    <div>
    <ul className="app-menu">
      <li><Link to={"/css/display"}> Display </Link></li>
      <li><Link to={"/css/box-model"}> Box Model</Link></li>
      <li><Link to={"/css/position"}> Position</Link></li>
      <li><Link to={"/css/float"}> Float</Link></li>
      <li><Link to={"/css/layout"}> Simple Layout </Link></li>
      <li><Link to={"/css/mq"}> Media Query </Link></li>
    </ul>
    <h1 style={ { marginLeft: '180px' } }> CSS Tutorial </h1>
    <div className="content">
      {children}
    </div>
  </div>
);
