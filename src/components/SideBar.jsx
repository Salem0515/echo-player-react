import React from 'react'
import { Assets, assets } from '../Assets/assets'
import './SideBare.css'
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {

    const navigate = useNavigate();

    return (
        <div className="section-one">
            <div className="section-two">
                <div onClick={() => navigate('/')} className="section-three">
                    <img src={assets.home_icon} alt="Home Icon" />
                    <p>Home</p>
                </div>
                <div className="section-three">
                    <img src={assets.search_icon} alt="Home Icon" />
                    <p>Search</p>
                </div>
            </div>
            <br />
            <div className="section-four">
                <div className="section-five">
                    <div className="section-six">
                        <img src={assets.stack_icon} alt="" />
                        <p>Your Liberary</p>
                    </div>
                    <div className="section-seven">
                        <img src={assets.arrow_icon} alt="" />
                        <br />
                        <img src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className="section-eight">
                    <h1>Create Your First Play Liste</h1>
                    <p>It is easy we will help you </p>
                    <button>Create PlayListe</button>
                </div>
                <div className="section-eight">
                    <h1>Lets Finde Some Podcast To Fowllow</h1>
                    <p>We will keep you update on new episodes </p>
                    <button>Brwose Podcast</button>
                </div>
            </div>
        </div>
    );
};
