import React from 'react';

export default () => {
  return (
    <div id="features-section" className="container clearfix">
      <div>
        <img src="src/assets/organize.svg" alt="Organize icon"/>
        <h2>Organize</h2>
        <p>Organizing future tasks couldn't be easier. Utilize lists to
        store and organize your tasks. Simplexity uses a color coded
        priority system to help you visually prioritize tasks.</p>
      </div>
      <div>
        <img src="src/assets/collaborate.svg" alt="Collaborate icon"/>
        <h2>Collaborate</h2>
        <p>Collaborate with friends, family and coworkers. Share a project
        and discuss your game plan for tackling the tasks.</p>
      </div>
      <div>
        <img src="src/assets/weather.svg" alt="Weather icon"/>
        <h2>Weather</h2>
        <p>Not all tasks can be completed if the weather won't cooperate.
        Simplexity will provide your current local weather so planning
        which tasks are feasible just became even more efficient.</p>
      </div>
    </div>
  );
};