import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">

                <p>{review.review}</p>
                <div class="avatar mt-9 flex justify-center items-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='w-20' src={review.img} alt="" />
                    </div>
                    <div className='ml-5 mt-5 flex justify-center items-center'>
                        <p>{review.name}</p>
                        <small>{review.location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;