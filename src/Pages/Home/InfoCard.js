import React from 'react';

const InfoCard = ({ img, title, body, bgClasses }) => {
  return (

    <div className={`card lg:card-side lg:min-w-lg shadow-xl ${bgClasses}`}>
      <figure><img src={img} alt="Album" className='pl-5 pt-4 sm:pt-0' /></figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default InfoCard;