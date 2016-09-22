import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div id="nav-section">
      <div className="container clearfix">
        <div>
          <img src="src/assets/nav-logo.svg" alt="Simplexity logo"/>
        </div>
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up for free</Link>
        </div>
      </div>
    </div>
  );
};