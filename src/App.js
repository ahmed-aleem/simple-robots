import React, { useState } from 'react';

import Robots from './components/robots';
import Search from './components/searchbar';

import RobotsList from "./util/robots-data";
import "./scss/app.scss";

const App = () => {

  const [text, setText] = useState("");

  const [robots, setRobots] = useState(RobotsList);

  const handleRobots = e => {
    setText(e.target.value);

    const newRobots = robots.filter(
        (robot, index) => (robot.name.toLowerCase().includes(e.target.value))
      );
    e.target.value !== "" ? setRobots(newRobots) : setRobots(RobotsList);
  }

  return (
    <div id="app">
      <Search value={text} handleRobots={handleRobots}/>
      <Robots robots={robots}/>
    </div>
  );
}

export default App;
