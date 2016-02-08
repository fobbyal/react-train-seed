import React from 'react';
export default () => (
  <div>
    <h2> Positions</h2>
    <div className="static">
    <h3>Static Box</h3>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div className="relative-basic">
      Basic Relative Box with no left top properties
    </div>
    <div className="relative-basic move">
      Basic Relative Box with left top properties
    </div>
    <div className="fixed">
      fixed box is relative to the view port of the page
    </div>
    <div className="relative-parent">
      Relative parent
    <div className="ab-block">Absolute bock is fixed to a positioned parent</div>
    </div>
  </div>

);
