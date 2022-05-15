import React from 'react';
import Chair from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png';


const Banner = () => {
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
          <h1 className="sm:text-5xl text:2xl font-bold uppercase">Your New Smile starts here</h1>
          <p className="py-6">We Care about your teeth and concern always hygine and comfortable treatment</p>
          <button className="btn border-0 bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;