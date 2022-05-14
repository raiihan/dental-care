import React from 'react';
import Quotes from "../../assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: "Winson Henrry",
            location: 'California'
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: "Winson Henrry",
            location: 'California'
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: "Winson Henrry",
            location: 'California'
        },
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary text-xl'>Testimonial</p>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={Quotes} alt="" className='w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Reviews;