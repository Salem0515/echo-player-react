import React, { useContext } from 'react';
import './SideBare.css';

// Import the PlayerContext and the necessary variables/functions
import { PlayerContext } from '../Context/PlayerContext';
import { assets, songsData } from '../Assets/assets';

const Player = () => {
    // Use the useContext hook to access the PlayerContext
    const { track, seekBar, seekBg, playerStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

    return (
        <div className="section-1">
            <div className="section-2">
                <img src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="section-3">
                <div className="section-4">
                    <img src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} src={assets.prev_icon} alt="" />
                    {playerStatus
                        ? <img onClick={pause} src={assets.pause_icon} alt="" />
                        : <img onClick={play} src={assets.play_icon} alt="" />
                    }
                    <img onClick={next} src={assets.next_icon} alt="" />
                    <img src={assets.loop_icon} alt="" />
                </div>
                <div className="section-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="progress-bar">
                        <div ref={seekBar} className="progress"></div>
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="section-6">
                <img src={assets.plays_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.queue_icon} alt="" />
                <img src={assets.speaker_icon} alt="" />
                <img src={assets.volume_icon} alt="" />
                <div className="section-6-chill"></div>
                <img src={assets.mini_player_icon} alt="" />
                <img src={assets.zoom_icon} alt="" />
            </div>
        </div>
    );
};

export default Player;
