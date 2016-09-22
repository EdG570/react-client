import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
      <div id="header-section">
        <img src="src/assets/headerLogo.svg" alt="Simplexity logo"/>
        <h3>Simplexity makes organizing everyday tasks a breeze. Collaborate
        with friends, family, or coworkers. Stay organized in today's fast-paced
        world with Simplexity.</h3>
        <Link to="/signup">Sign up for free</Link>
      </div>
    );
};

