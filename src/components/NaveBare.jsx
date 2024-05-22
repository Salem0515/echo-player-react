import React from 'react'
import { Assets, assets } from '../Assets/assets'
import './SideBare.css'
import { useNavigate } from 'react-router-dom'

const NaveBare = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="nav-1">
                <div className="nav-2">
                    <img onClick={() => navigate(-1)} src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} src={assets.arrow_right} alt="" />
                </div>
                <div className="nav-3">
                    <p>Explore Premiume</p>
                    <p className='install'>Install App</p>
                    <p className='letter'>Y</p>
                </div>
            </div>
            <div className="nav-4">
                <p>All</p>
                <p className='music'>Music</p>
                <p className='music'>Podcasts</p>
            </div>

        </>
    )
}

export default NaveBare