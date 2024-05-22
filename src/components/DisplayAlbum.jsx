import React, { useContext } from 'react'
import NaveBare from './NaveBare'
import { Form, useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../Assets/assets';
import { PlayerContext } from '../Context/PlayerContext';
import './SideBare.css'


const DisplayAlbum = () => {

    const { id } = useParams();

    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext)



    return (
        <>
            <NaveBare />
            <div className="da-1">
                <img src={albumData.image} alt="" />
                <div className="da-2">
                    <p>Playlist</p>
                    <h2>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='logo'>
                        <img src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        . 1,233,264 likes
                        . <b>50 songs,</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>
            <div className="da-3">
                <p><b>#</b>Title</p>
                <p>Album</p>
                <p className='date'>Date Added</p>
                <img src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} key={index} className="da-4">
                        <p>
                            <b>{index + 1}</b>
                            <img src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='albumName'>{albumData.name}</p>
                        <p className='publish'>5 Days Ago</p>
                        <p className='duration'>{item.duration}</p>
                    </div>

                ))
            }
        </>
    )
}

export default DisplayAlbum