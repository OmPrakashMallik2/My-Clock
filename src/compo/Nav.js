import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation();
  return (
    <div className="bg-green-500">
      <ul className="p-6 flex item-center gap-10 justify-center">
        <Link to="/" className={`hover:text-white active:text-white font-bold text-lg ${location.pathname === '/' ? 'text-white' : ''} `}>Clock</Link>
        <Link to="alarm" className={`hover:text-white active:text-white font-bold text-lg ${location.pathname === '/alarm' ? 'text-white' : ''} `}>Alarm</Link>
        <Link to="timer" className={`hover:text-white active:text-white font-bold text-lg ${location.pathname === '/timer' ? 'text-white' : ''} `}>Timer</Link>
        <Link to="stopwatch" className={`hover:text-white active:text-white font-bold text-lg ${location.pathname === '/stopwatch' ? 'text-white' : ''} `}>Stopwatch</Link>
      </ul>
    </div>
  )
}

export default Nav
