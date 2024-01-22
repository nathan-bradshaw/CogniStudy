import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';
import BrownNoisePlayer from './components/BrownNoisePlayer';
import Whiteboard from './components/Whiteboard';
import MotivationalQuote from './components/MotivationalQuote';
import './MainApp.css';

const MainApp = () => {
  return (
    <div className="App">
      <PomodoroTimer className="PomodoroTimer" />
      <BrownNoisePlayer className="BrownNoisePlayer" />
      <Whiteboard className="Whiteboard" />
      <MotivationalQuote className="MotivationalQuote" />
    </div>
  );
};

export default MainApp;
