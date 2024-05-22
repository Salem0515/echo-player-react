import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar';
import Player from './components/Player';
import Display from './components/Display';
import { useContext } from 'react';
import { PlayerContext } from './Context/PlayerContext';

function App() {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div>
      <div className='main'>
        <SideBar />
        <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </div>
  );
}

export default App;
