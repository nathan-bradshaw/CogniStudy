import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  // State variables
  const [pomodoroDuration, setPomodoroDuration] = useState(25); // Default: 25 minutes
  const [breakDuration, setBreakDuration] = useState(5); // Default: 5 minutes
  const [timerType, setTimerType] = useState('pomodoro');
  const [timerDuration, setTimerDuration] = useState(pomodoroDuration * 60);
  const [remainingTime, setRemainingTime] = useState(timerDuration);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Audio element for playing a sound
  const timerEndSound = new Audio(`${process.env.PUBLIC_URL}/sounds/timer.wav`);


  // Function to start or pause the timer
  const toggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsTimerRunning(false);
    setRemainingTime(timerDuration);
  };

  // Function to switch between Pomodoro and break timers
  const switchTimerType = () => {
    const newTimerType = timerType === 'pomodoro' ? 'break' : 'pomodoro';
    setTimerType(newTimerType);
    setRemainingTime(newTimerType === 'pomodoro' ? pomodoroDuration * 60 : breakDuration * 60);
  };

  // Function to update timer duration and reset the timer
  const updateTimerSettings = () => {
    setTimerDuration(timerType === 'pomodoro' ? pomodoroDuration * 60 : breakDuration * 60);
    setRemainingTime(timerType === 'pomodoro' ? pomodoroDuration * 60 : breakDuration * 60);
    resetTimer();
  };

  // Effect to update the timer every second when it's running
  useEffect(() => {
    let timerId;

    if (isTimerRunning && remainingTime > 0) {
      // Update remaining time every second
      timerId = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (isTimerRunning && remainingTime === 0) {
      // Switch to the next timer type when the current timer is done
      switchTimerType();
      // Play the timer end sound
      timerEndSound.play();
    }

    // Cleanup function to clear the interval
    return () => clearInterval(timerId);
  }, [isTimerRunning, remainingTime, switchTimerType]);

  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Draggable>
        <div className="timer-container">
        <h1>Pomodoro Timer</h1>
        <div className="timer">
            <p>{formatTime(remainingTime)}</p>
        </div>
        <div>
            {/* Button to start or pause the timer */}
            <button onClick={toggleTimer} className={isTimerRunning ? 'pause-btn' : 'start-btn'}>
            {isTimerRunning ? 'Pause' : 'Start'}
            </button>
            {/* Button to reset the timer */}
            <button onClick={resetTimer} className="reset-btn">
            Reset
            </button>
        </div>
        <div>
            {/* Pomodoro timer settings */}
            <div>
            <label>
                Pomodoro Duration (minutes):
                <input
                type="number"
                value={pomodoroDuration}
                onChange={(e) => setPomodoroDuration(parseInt(e.target.value, 10))}
                />
            </label>
            </div>
            {/* Break timer settings */}
            <div>
            <label>
                Break Duration (minutes):
                <input
                type="number"
                value={breakDuration}
                onChange={(e) => setBreakDuration(parseInt(e.target.value, 10))}
                />
            </label>
            </div>
            {/* Update button to apply the new settings */}
            <div>
            <button onClick={updateTimerSettings} className="update-btn">
                Update
            </button>
            </div>
        </div>
        </div>
    </Draggable>
  );
};

export default PomodoroTimer;
