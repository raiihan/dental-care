import React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


import Chair from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png';

const AppoinmentBannen = ({ date, setDate }) => {

    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}
            className="hero min-h-screen min-w-min">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBannen;