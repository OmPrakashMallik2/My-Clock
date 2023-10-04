import React, { useState, useEffect } from 'react';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleHourChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleSecondChange = (event) => {
    setSeconds(event.target.value);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              setIsRunning(false);
              clearInterval(interval);
            } else {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, hours, minutes, seconds]);

  return (
    <div className="p-5">
      <h1 className="text-green-700 font-bold text-center text-4xl mb-4">Timer</h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

        <div className="timer-inputs items-center space-x-2">
          <input
            type="number"
            placeholder="Hr"
            value={hours}
            onChange={handleHourChange}
            className="w-16 py-2 px-3 border rounded"
          />
          <input
            type="number"
            placeholder="Mn"
            value={minutes}
            onChange={handleMinuteChange}
            className="w-16 py-2 px-3 border rounded"
          />
          <input
            type="number"
            placeholder="Sc"
            value={seconds}
            onChange={handleSecondChange}
            className="w-16 py-2 px-3 border rounded"
          />
        </div>
        <div className="timer-display text-4xl font-bold">
          <span>{hours < 10 ? `0${hours}` : hours}:</span>
          <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <div className="p-">
          <button
            onClick={handleStart}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isRunning ? 'bg-blue-300' : ''
              }`}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
