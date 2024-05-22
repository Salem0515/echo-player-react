import React, { useContext } from 'react'
import './SideBare.css'
import { PlayerContext } from '../Context/PlayerContext'

const SongItems = ({ name, image, desc, id }) => {

    const { playWithId } = useContext(PlayerContext)
    return (
        <div onClick={() => playWithId(id)} className='son-1'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p className='desc'>{desc}</p>
        </div>
    )
}

export default SongItems