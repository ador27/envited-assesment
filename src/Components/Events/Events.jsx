import React from 'react';
import birthdayCake from '../../Images/Birthday cake.png';
import './Events.css';
import { MdArrowForwardIos } from "react-icons/md";

const Events = () => {
    return (
        <div className='grid lg:grid-cols-2 mt-24 ml-24'>
            <div className='ml-4'>
                <h1 className='title'>Birthday Bash</h1>
                <p className='host'>Hosted by <span className='text-bold'>Rashedul</span></p>

                <div className='mt-12'>
                    <div>
                        <div className='grid lg:grid-cols-2 mt-2'>
                            <div>
                                <p>18 August 6:00PM</p>
                                <p>
                                    to <b>19 August 1:00PM</b>UTC + 10
                                </p>
                            </div>
                            <div style={{ color: "#BDBDBD" }}>
                                <MdArrowForwardIos />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='grid lg:grid-cols-2 mt-4'>
                            <div>
                                <p>Street Name</p>
                                <p>Suburb, State, Postcode</p>
                            </div>
                            <div style={{ color: "#BDBDBD" }}>
                                <MdArrowForwardIos />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='object-scale-down h-48 w-96 ...'>
                <img src={birthdayCake} alt="" />

            </div>

        </div>
    );
};

export default Events;