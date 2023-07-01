import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Room from './Components/Room'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/room/:roomId' element={<Room />}/>
      </Routes>
    </>
  );
}


