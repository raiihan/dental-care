import React from 'react';
import Flouride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';
import ServicesTerm from './ServicesTerm';

const Services = () => {

    const data = [
        {
            _id: 1,
            name: "Flouride Treatment",
            detail: 'Flouride treatment service is available now here',
            img: Flouride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            detail: 'Cavity Filling service is available now here',
            img: Cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            detail: 'Teeth Whitening service is available now here',
            img: teeth
        }
    ]
    return (
        <section className='mt-36'>
            <h3 className='text-xl text-primary font-bold text-center mx-auto'>Our Service</h3>
            <h2 className='text-2xl md:text-4xl text-center'>Services we provided</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <div className='my-12'>
                <ServicesTerm />
            </div>
        </section>
    );
};

export default Services;