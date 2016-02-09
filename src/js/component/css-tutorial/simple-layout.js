import React from 'react';

export default () => {
  const position = (
    <div className ="ps-container">
      <div className="header ps-middle">Simple Layout using posiiton</div>
      <div className="left-side ps-left">Left side</div>
      <div className="main ps-middle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className="right-side ps-right">Right Side</div>
      <div className="footer ps-middle">Footer</div>
    </div>
  );
  return <div>{position}</div>;
};
