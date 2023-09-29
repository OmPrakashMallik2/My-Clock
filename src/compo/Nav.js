import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="bg-green-500">
      <ul className="p-6 flex item-center gap-10 justify-center">
        <Link to="/" className="font-bold text-lg ">Clock</Link>
        <Link to="alarm" className="font-bold text-lg ">Alarm</Link>
        <Link to="timer" className="font-bold text-lg ">Timer</Link>
        <Link to="stopwatch" className="font-bold text-lg ">Stopwatch</Link>
      </ul>
    </div>
  )
}

export default Nav
