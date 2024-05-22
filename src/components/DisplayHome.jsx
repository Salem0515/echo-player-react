import React from 'react'
import NaveBare from './NaveBare'
import './SideBare.css'
import { Assets, assets } from '../Assets/assets'
import { albumsData } from '../Assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../Assets/assets'
import SongItems from './SongItems'
const DisplayHome = () => {
    return (
        <>
            <NaveBare />
            <div className="home-1">
                <h1>Featured Charts</h1>
                <div className="home-2">
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className="home-1">
                <h1>Twodays Biggest Hits</h1>
                <div className="home-2">
                    {songsData.map((item, index) => (<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome