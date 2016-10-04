import React from 'react';
import './features.scss';

export default () => {
  return (
    <div id="features-section" className="container clearfix">
      <div>
        <img src="src/assets/organize.svg" alt="Organize icon"/>
        <h2>Organize</h2>
        <p>Organizing tasks couldn't be easier. Utilize lists to
        store and organize your tasks. Simplexity uses a color coded
        priority system to help you prioritize your tasks.</p>
      </div>
      <div>
        <img src="src/assets/collaborate.svg" alt="Collaborate icon"/>
        <h2>Collaborate</h2>
        <p>Collaborate with friends, family and coworkers. Share a project
        and discuss your game plan for tackling the project.</p>
      </div>
      <div>
        <img src="src/assets/weather.svg" alt="Weather icon"/>
        <h2>Plan</h2>
        <p>Not all tasks can be completed if the weather won't cooperate.
        Simplexity provides your current local weather so planning
        which tasks are feasible just became even easier.</p>
      </div>
    </div>
  );
};