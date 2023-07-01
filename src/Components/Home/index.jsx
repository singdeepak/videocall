import React, { useState } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [roomId , setRoomId] = useState();
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`/room/${roomId}`);
    }
  return (
    <>
      <div className="container">
        <input type="text" placeholder='Enter Room ID' value={roomId} onChange={e => setRoomId(e.target.value)} />
        <button onClick={handleJoin}>Join</button>
      </div>
    </>
  )
}
