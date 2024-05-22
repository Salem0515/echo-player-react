import React from 'react'
import './SideBare.css'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/album/${id}`)} className='alb-1'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p className='desc'>{desc}</p>

        </div>
    )
}

export default AlbumItem