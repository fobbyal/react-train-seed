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
//     </div>
//   </div>
// );
export default ({ children }) => (
    <div>
    <ul className="app-menu">
      <li><Link to={"/css/display"}> Display </Link></li>
      <li><Link to={"/css/box-model"}> Box Model</Link></li>
      <li><Link to={"/css/position"}> Position</Link></li>
    </ul>
    <div className="content">
      {children}
    </div>
  </div>
);
