import React, { useEffect, useState } from 'react';
import './style.css'

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className='p-5'>
      <h1 className='text-green-700 font-bold text-center text-4xl'>Digital Clock</h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="time text-7xl text-white font-bold">
          {hours < 10 ? `0${hours}` : hours}: 
          {minutes < 10 ? `0${minutes}` : minutes}: 
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
