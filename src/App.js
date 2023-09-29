
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './compo/Footer';
import Nav from './compo/Nav';
import Timer from './compo/Timer';
import Clock from './compo/Clock';
import Alarm from './compo/Alarm';
import Stopwatch from './compo/Stopwatch';

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Clock/>}/>
        <Route path="alarm" element={<Alarm />}/>
        <Route path="timer" element={<Timer />}/>
        <Route path="stopwatch" element={<Stopwatch />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
