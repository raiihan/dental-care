import React from 'react';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard
                img={Clock}
                title="Opening Hours"
                body="Our Opening Time you can visit"
                bgClasses="bg-gradient-to-r from-primary to-secondary"
            />
            <InfoCard
                img={Marker}
                title="Visit our Location"
                body="You can find us easily"
                bgClasses="bg-accent"
            />
            <InfoCard
                img={Phone}
                title="Contact Us"
                body="+510653201"
                bgClasses="bg-gradient-to-r from-primary to-secondary"
            />
        </div>
    );
};

export default Info;