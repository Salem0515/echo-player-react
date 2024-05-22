import React, { useEffect, useRef } from 'react'
import './SideBare.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../Assets/assets'


const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location && location.pathname.includes("album");
    const albumId = isAlbum ? (location.pathname.slice(-1) || "") : "";
    const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        } else {
            displayRef.current.style.background = `#121212`;
        }
    }, [isAlbum, bgColor]);

    return (
        <div ref={displayRef} className="one">
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
            </Routes>
        </div>
    );
};


export default Display