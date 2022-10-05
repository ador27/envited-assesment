import React from 'react';
import { useNavigate } from 'react-router-dom';
import movieNight from '../../Images/Landing Page.png';
import './LandingPage.css';
import { GiPartyPopper } from "react-icons/gi";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleEvent = () => {
        navigate("/create");
    };
    return (
        <div className='grid lg:grid-cols-2 m-24'>
            <div className='ml-24'>
                <img src={movieNight} alt="" />
            </div>

            <div className='text-right font-helvetica mt-24 mr-24'>
                <div className='text-3xl font-bold'>
                    <h1 className='first'>Imagine if</h1>
                    <h1 className='second'>Snapchat</h1>
                    <h1 className='third'>had events</h1>
                </div>
                <p className='subtitle text-right'>Easily host and share event with your friends <br /> across any social media</p>
                <button className="button" onClick={handleEvent}>
                    <p>
                        <GiPartyPopper style={{ color: "#F8CB49", fontSize: "18px" }} />
                        Create my event
                    </p>
                </button>
            </div>

        </div>
    );
};

export default LandingPage;